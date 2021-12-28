/* eslint-disable react/no-typos */
import Slider from "./Slider.jsx";
import Spinner from "./componentes/Spinner";
import '../index.css'
import useFetch from "./hooks/useFetch.js";
import Error from "../Error/Error.jsx";
import { useEffect } from "react";

//https://api.quotable.io/random
//https://randomuser.me/api/

const SliderContainer = ({typo}) => {

 // llamamos al hook y realizamos nuestra consulta a los dos endpoints.
 const {user,quote,loading,error,fetchData, setLoading} = useFetch('https://randomuser.me/api/','https://api.quotable.io/random')


  useEffect(() => {
    setLoading(true)
    fetchData();
  }, []);

  
 //fn que realiza un refetch. 
 const onNext = () => {
    fetchData();
    setLoading(true);
  };

  if (error) return <Error/>

  return (
    <div className="container-app">
      {loading ? (
        <Spinner />
      ) : (
        <>
          {user.map((user) => (
            <Slider
              user={user}
              quote={quote}
              loading={loading}
              onNext={onNext}
              typo={typo}   
              key={user.id}          
            />
          ))}
        </>
      )}
    </div>
  );
};



export default SliderContainer;