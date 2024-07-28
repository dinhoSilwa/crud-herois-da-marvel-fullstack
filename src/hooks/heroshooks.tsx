import useSWR from "swr"
import { fetchMarvel } from "../api/getallheros"
import { useEffect, useState } from "react"

export const useHeros = () =>{
  const url = import.meta.env.BASE_URL_API
  const {data, error} = useSWR(url, fetchMarvel)
  const [isloading, setLoading] = useState<boolean>(true);
  const [dataResult, setData] = useState<any>(null);
  const [isError, setError] = useState<Error | null>(null);

  useEffect(()=>{

 if(data){
  setData(data)
  setLoading(false)
  setError(null)
 }else if(error){
  setLoading(false)
  setError(error)
 }
  }, [data, error])

return{
  isloading, 
  dataResult,
  isError
}  
}