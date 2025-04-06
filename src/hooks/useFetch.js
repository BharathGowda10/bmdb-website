import { useState, useEffect } from "react";

const useFetch = (apiPath, queryTerm) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchApi();
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
