

// const useFetch = (url) => {
// 	const [data, setData] = useState(null);
// 	const [isLoading, setIsLoading] = useState(false);
// 	const [isError, setIsError] = useState(false);

// 	useEffect(() => {
// 		if(!url) return; // Om ingen URL anges så returnerar vi direkt

// 		const fetchData = async () => {
// 			setIsLoading(true);
// 			try {
// 				const response = await axios.get(url);
// 				setData(response.data);
// 			} catch(error) {
// 				console.error('useFetch error:', error);
// 				setIsError(true)
// 			} finally {
// 				setIsLoading(false)
// 			}
// 		}

// 		fetchData();
// 	}, [url]);

// 	// Returnerar data, isLoading, isError. När vi kör hooken i våra komponenter kan skriva exempelvis { data : credits } och sedan använda credits, exempelvis credits.name, credits.character, för att hålla reda på vad vi faktiskt använder, istället för data överallt.
// 	// Fråga mig om något är oklart // Nikki
// 	return { data, isLoading, isError }
// };

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