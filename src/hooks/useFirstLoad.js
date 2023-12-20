import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextB";
import { urlProps, urlUser } from "../mockups&utils/endpoint";
import axios from "axios";
import { usePropHandler } from "./usePropHandler";
// import axios from "axios";

export function useFirstLoad() {
    const { userData, setUserData, token, properties, setProperties } = useContext(UserContext)
    const { getProps } = usePropHandler()

    // console.log(token);
    useEffect(() => {
        async function loadaxios() {
            try {
                const { data } = await axios.post(`${urlUser}/token`, {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(data.user)
            } catch (error) {
                console.log(error)
                sessionStorage.removeItem('token')
                setUserData(null)
            }
        }
        token
            ? loadaxios()
            : setUserData(null)
        /* async function loadPropertiesFirst() {
            try {
                console.log(getProps());
            } catch (error) {
                console.log(error);
            }
        }
        loadPropertiesFirst() */
    }, [])
    return {
        userData,
        token
    }
}

