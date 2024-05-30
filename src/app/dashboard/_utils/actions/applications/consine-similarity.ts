export const calculateSimilarity = ({ doc1 = "hello", doc2 = "Hello" }: { doc1?: string, doc2?: string }) => {
    let result = 0;

    // Convert documents to lowercase
    doc1 = doc1.toLowerCase();
    doc2 = doc2.toLowerCase();

    // Tokenize documents
    const tokens1 = doc1.split(" ");
    const tokens2 = doc2.split(" ");

    // Get term frequencies
    const tf1 = getTermFrequency(tokens1);
    const tf2 = getTermFrequency(tokens2);

    // Get unique terms
    const allTerms = unionKeys(tf1, tf2);

    // Calculate dot product
    let dotProduct = 0;
    // @ts-ignore
    for (const term of allTerms) {
        dotProduct += (tf1[term] || 0) * (tf2[term] || 0);
    }

    // Calculate magnitudes
    const magnitude1 = getMagnitude(tf1);
    const magnitude2 = getMagnitude(tf2);

    // Avoid division by zero
    if (magnitude1 === 0 || magnitude2 === 0) {
        result = 0;
    } else {
        // Calculate cosine similarity
        const similarity = dotProduct / (magnitude1 * magnitude2);

        // Convert similarity to percentage
        const similarityPercentage = similarity * 100;

        result = Number(similarityPercentage.toFixed(2));
    }

    return result;
};

const getTermFrequency = (tokens: string[]) => {
    const tf: Record<string, number> = {};
    tokens.forEach((token) => {
        tf[token] = (tf[token] || 0) + 1;
    });
    return tf;
};

const getMagnitude = (tf: Record<string, number>) => {
    let magnitude = 0;
    for (const term in tf) {
        magnitude += tf[term] ** 2;
    }
    return Math.sqrt(magnitude);
};

// Function to get the union of keys from two objects
const unionKeys = (obj1: Record<string, any>, obj2: Record<string, any>) => {
    const keys = new Set<string>();
    for (const key in obj1) {
        keys.add(key);
    }
    for (const key in obj2) {
        keys.add(key);
    }
    return keys;
};
