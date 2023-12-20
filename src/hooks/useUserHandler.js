import { useContext } from "react";
import { UserContext } from "../context/UserContextB";
import { urlUser } from "../mockups&utils/endpoint";
import axios from "axios";

export function useUserHandler() {
    const { setUserData, token } = useContext(UserContext)

    const logout = () => {
        setUserData(null)
        sessionStorage.removeItem('token')
    }

    const login = async (email, password) => {
        try {
            const { data } = await axios.post(`${urlUser}/signin`, {
                email, password
            })

            sessionStorage.setItem('token', data.response.token)
            setUserData({ ...data.response.user, online: true })
            return data
        } catch (error) {
            console.log(error);
            return error.response.data.message || error.response.data
        }
    }

    const isLogged = async () => {
        try {
            const result = axios.post(`${urlUser}/token`, {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return { logout, login, isLogged }
}