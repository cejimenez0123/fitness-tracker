import axios from "axios"
import { useQuery } from "@tanstack/react-query";
import Enviroment from "../core";
const Base_Url = "http://localhost:3000"

// getting Data
export  function useApi(Endpoint) {
  const url = `${Base_Url}/${Endpoint}`;
  return useQuery({
    queryKey: [Endpoint],
    queryFn: async () => {
      const { data } = await axios.get(url,
        {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the bearer token in the Authorization header
          },
      }
    );
      return data;

    },
  });
}
//posting data to the back end
export  async function postApi(Endpoint,data) {
  // console.log(Endpoint, data);
  const url = `${Base_Url}/${Endpoint}`;
  try {
    const response = await axios.post(url, data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,}
      }
    );
    
    return response.data;
  } catch (error) {
    throw new Error('Error posting data');
  }
}
export const deleteApi = async (Endpoint) => {
  const url = `${Base_Url}/${Endpoint}`;
  console.log(url);

  try {
    const response = await axios.delete(url, data,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,}
      }
    );
    
    return response.data;
  } catch (error) {
    throw new Error('Error posting data');
  }
};