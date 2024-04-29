"use client"
import { useEffect, useState } from "react"
import NLP from "compromise";
import { Button } from "@/components/ui/button";




const Page = () => {
    const [data, setData] = useState<any>(null)
    const [parseData, setParseData] = useState<any>(null)
    useEffect(() => {
        if (typeof window !== "undefined") {
            const extractedData = window.localStorage.getItem("extractedData")
            if (extractedData) {
                setData(extractedData);
            }
        }
    })
    const parser = () => {

        if(data){
            const text =NLP(data);
            const tokenized = text.sentences().terms().out("array");
            // const stemmed = text.stemmer();
        const POS = text.out("tags");
        setParseData(POS);
        }
        // const natural = require('natural');

        // console.log(natural.PorterStemmer.tokenizeAndStem(data));


    }



    return (
        
        <div> 
            <div>{data}</div>
            <div>{parseData?.toString()}</div>
            <Button onClick={parser}> Parse</Button>
        </div>
    )
}
export default Page;