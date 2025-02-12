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
            const response = await client.getEntries({ content_type: 'adwaty' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, categoray  , images  , howiuse , benfites} = item.fields;
           
           const imagesCutomez = checkimageprotcoll(images)
       
            const id = item.sys.id;
            return {title, details, categoray , howiuse , benfites , id , imagesCutomez}
        })  
            

            console.log("Custom Data:", customzData); // Verify data mapping
            setdata(customzData); // Update state
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

export const AuthFetchpresesleas = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'customers' })
        
            const CustomezData = response?.items?.map((item) => {
                const { name, details, image } = item.fields;
                const id = item.sys.id;
                const createdAt = item.sys.createdAt;
                const img = image?.fields?.file?.url?.startsWith("//")
                  ? `https:${image.fields.file.url}`
                  : image?.fields?.file?.url;
                return { id, name, details, img, createdAt };
              });    
            

            console.log("Custom Data:", CustomezData); // Verify data mapping
            setBlogs([...CustomezData]); // Update state
            setLoading(false);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);



    return { loading, blogs  };
};

export const AuthFetchHomeAbout = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'adwaty' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, image} = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, details , id , img}
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

export const AuthFetchTeam = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'team' });
        
        const customzData = response?.items?.map((item) => {
            const { name, about, image ,job} = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {name, about , id , img ,job}
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

export const AuthFetchservicea = () => {
    const [data, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await client.getEntries({ content_type: 'servives' });
        
        const customzData = response?.items?.map((item) => {
            const { title, details, image } = item.fields;
           
            const img = image?.fields?.file?.url?.startsWith("//")
            ? `https:${image.fields.file.url}`
            : image?.fields?.file?.url;
            const id = item.sys.id;
            return {title, details , id , img }
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