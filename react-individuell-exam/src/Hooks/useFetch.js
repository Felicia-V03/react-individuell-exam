import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!url) {
      console.error("No URL provided to useFetch.");
      return;
    }
    setIsLoading(true);
    axios.get(url)
        .then(response => setData(response.data))
        .catch(error => setIsError(true))
        .finally(() => setIsLoading(false));
  }, [url]);

  return { data, isLoading, isError };
}