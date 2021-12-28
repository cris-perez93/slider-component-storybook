import {useState} from "react";


const useFetch = (url, url2) => { // hook para llamar a los usuarios random del slider y frases.

    const [user,setUser] =  useState([])
    const [quote,setQuote] =  useState([])
    const [loading, setLoading] =  useState(false);
    const [error, setError] =  useState(null)

  

    const fetchData = async () => {

        try {
            // con promise.all llamamos a los dos endpoints de manera simultanea.
            const [data1, data2] = await Promise.all([
              fetch(url).then((res) => res.json()),
              fetch(url2).then((res) => res.json()),
            ]);
      
            setUser(data1.results); 
            setQuote(data2);
            setLoading(false);
          } catch (error) {
            setError(true);
            setLoading(false);
          }
    }

    return{
        user,
        quote,
        loading,
        error,
        fetchData,
        setLoading

    }
}
 
export default useFetch;