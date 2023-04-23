import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse <T>{
    count : number;
    results : T[]
}

const useData = <T>(apiEndPoint : string, requestConfig?: AxiosRequestConfig, deps?:any[] ) => {

      
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isloading, setLoading] = useState(false);

  useEffect(() => {
    const controler = new AbortController();
    setLoading(true)
    apiClient
      .get<FetchResponse<T> >(apiEndPoint, {signal : controler.signal, ...requestConfig})
      .then((res) => {setData(res.data.results)
      setLoading(false)
      })
      .catch((err) => {
        if(err instanceof CanceledError) return 
        setError(err.message)});
        setLoading(false)

    return () => controler.abort()
  },deps ? [...deps] : []);

  return {data, error, isloading}
}

export default useData;