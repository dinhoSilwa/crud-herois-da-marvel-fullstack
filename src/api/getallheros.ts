import axios from "axios"
export const fetchMarvel = async (urlMarvel : string) => axios.get(urlMarvel).then(res => res.data)
  
