"use client"
import client from "./ContentfullClient";
import { useEffect, useState } from "react";

const checkimageprotcoll = (images) =>{
  const  custmezimages = images.map((image) =>{
        if(image?.fields?.file?.url?.startsWith("//")) {
            const url = `https:${image.fields.file.url}`
            return {url}
        }else{
            const url = image?.fields?.file?.url
            return {url}
        }
    })
    return custmezimages
}
  export const AuthFetchBlog = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'rohaStudioSeries' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, category , country ,promoLink ,castImages , seriesImages } = item.fields;
           
           const seriesimagesCutmez = checkimageprotcoll(seriesImages)
           const castimagesCutmez = checkimageprotcoll(castImages)
            const id = item.sys.id;
            return {title, details, category , country , promoLink , castimagesCutmez , seriesimagesCutmez , id}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata([...customzData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, data  };
};