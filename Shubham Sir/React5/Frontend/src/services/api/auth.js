import axios from "axios"
import Cookies from "js-cookie"

const BaseUrl = "http://localhost:5000"


export const loginUser = async (email, password) => {
  try{
    let response = await axios.post(`${BaseUrl}/auth/login`, {
      email,
      password
    })
    Cookies.set("token", response.data.token ,{expires: 7})

    return response.data.user;
  }catch(err){
    console.error("Error logging in:", err)
  }
}

export const registerUser = async (userData) => {
  try {
    let response = await axios.post(`${BaseUrl}/auth/signup`, userData)
    Cookies.set("token", response.data.token ,{expires: 7})

    return response.data.user;
  } catch (error) {
    console.log(error)
  }
  }

export const logoutUser = async () => {
  Cookies.remove("token")
}

export const getCurrentUser = async () => {
  
}
