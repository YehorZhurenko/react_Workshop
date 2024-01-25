import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState();
  const setReq = (req) => {
    url = req;
  };

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, [url]);

  return [{ data: data }, setReq];
};

export default useFetch;
