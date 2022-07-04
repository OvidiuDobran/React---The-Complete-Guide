import { useCallback, useEffect, useState } from "react";

const useHttp = (reqBody, callback, dependencies = []) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const performRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-a8b9e-default-rtdb.firebaseio.com/tasks.json",
        reqBody
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      callback(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [reqBody]);

  useEffect(() => {
    performRequest();
  }, dependencies);

  return [isLoading, error, performRequest];
};

export default useHttp;
