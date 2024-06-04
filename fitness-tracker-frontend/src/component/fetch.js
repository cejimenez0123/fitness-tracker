import axios from "axios"
import Enviroment from "../core"
export  async function workout(){
const {data}=await axios.get(Enviroment.BASE_URL+"/unprotected")

console.log(data)
}