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
    return err.message
  }
}

export const registerUser = async (userData) => {
  try {
    let response = await axios.post(`${BaseUrl}/auth/signup`, userData)
    Cookies.set("token", response.data.token ,{expires: 7})

    return response.data.user;
  } catch (error) {
    return error.message
  }
  }

export const logoutUser = async () => {
  Cookies.remove("token")
}

export const getCurrentUser = async () => {
  try{
    let res = await axios.get(BaseUrl+"/user",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
    return res.data.user
  }catch(err){
    return err.message
  }
  
}
