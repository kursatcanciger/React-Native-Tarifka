import React, { useState, useEffect } from "react";
import axios from "axios";

function useFetch(URL) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const { data: responseData } = await axios.get(URL);
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return { loading, data, error }
}

export default useFetch;