import axios from "axios"
export  async function workout(){
const {data}=await axios.get("http://localhost:3000/unprotected")

console.log(data)
}