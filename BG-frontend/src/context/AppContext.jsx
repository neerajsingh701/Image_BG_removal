
import { createContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

export const AppContext = createContext();



const AppContextProvider = ({ children }) => {

  const navigate = useNavigate()

  const [utoken, setuToken] = useState(Cookies.get("token") || "")
  const [userData, setUserData] = useState(null)
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL


  // fetching user info on reload if token exsts 

  useEffect(() => {

    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const { data } = await axios.get(`${backendURL}/api/users/me`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          if (data.success) {
            setUserData(data.user);
            setuToken(token);
          }

        } catch (error) {
          console.log("Error fetching user:", error);
          setuToken("");
          setUserData(null);
        }
      }
    };
    fetchUser();

  }, []);


  const handleRegister = async (username, email, password) => {
    //done by me
    // same as login.....
    try {
      const { data } = await axios.post(`${backendURL}/api/users/register`, { username, email, password }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      })

      if (data.success) {
        Cookies.set("token", data.token, { expires: 7 })
        setuToken(data.token)
        toast.success(data.message)
        setUserData(data.user)
        navigate('/')
      }
      console.log(userData)

    } catch (error) {
      const errorMessage = error.response?.data?.message || error?.message || "An enexpected error occured";
      toast.error(errorMessage)
    }
  }




  const handleLogin = async (email, password) => {
    //done by me
    //when the user login and click on the login button then 
    // it mus hit out backgend and  check our database and verify the user
    try {

      const { data } = await axios.post(`${backendURL}/api/users/login`, { email, password }, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true
      })

      if (data.success) {
        Cookies.set("token", data.token, { expires: 7 });
        setuToken(data.token)
        setUserData(data.user)
        toast.success(data.message)
        navigate("/")
      }
      console.log(data)

    } catch (error) {
      const errorMessage = error.response?.data?.message || error?.message || "An enexpected error occured";
      toast.error(errorMessage)

    }

  }




  const removeBg = async (image) => {
    try {
      setImage(image)
      setResultImage(false)
      navigate('/result')

      const formData = new FormData()
      image && formData.append('image', image);

      const token = Cookies.get('token')


      const { data } = await axios.post(`${backendURL}/api/images/remove-bg`, formData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (data.success) {

        setResultImage(data.resultImage)
      }
      else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }

  }




  const value = {
    backendURL,
    handleRegister,
    handleLogin,
    removeBg,
    utoken,
    userData,
    setUserData,
    setuToken,
    setResultImage,
    image,
    resultImage,
    setImage

  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;