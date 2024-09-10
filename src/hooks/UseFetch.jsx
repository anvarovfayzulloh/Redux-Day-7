import { useState } from "react";
import axios from "../api/axios";
import { useEffect } from "react";

  

const useFetch = (URL) => {

  const [data, setData] = useState(null);

  

  useEffect(() => {

    const loading = async () => {

      const responce = await axios.get(URL);

      setData(responce.data.products)

    }

    loading()

  },[URL])

  return {data}

}

  

export {useFetch}