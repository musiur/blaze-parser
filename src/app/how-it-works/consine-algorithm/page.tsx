/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";

function CosineSimilarity() {
  // Hardcoded documents
  const doc1: string = "This is the first document";
  const doc2: string = "This is the second document";

  const [similarity, setSimilarity] = useState<number | null>(null);

  useEffect(() => {
    calculateSimilarity();
  }, []); // Calculate similarity on component mount

  const calculateSimilarity = () => {
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
      setSimilarity(0);
      return;
    }

    // Calculate cosine similarity
    const similarity = dotProduct / (magnitude1 * magnitude2);

    // Convert similarity to percentage
    const similarityPercentage = similarity * 100;

    setSimilarity(Number(similarityPercentage.toFixed(2)));
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

  return (
    <div className="container section">
      <h2>Cosine Similarity Calculator</h2>
      <div>
        <p>Document 1: {doc1}</p>
        <p>Document 2: {doc2}</p>
      </div>
      {similarity !== null && (
        <div>
          <p>Cosine Similarity: {similarity}%</p>
        </div>
      )}
    </div>
  );
}

export default CosineSimilarity;
