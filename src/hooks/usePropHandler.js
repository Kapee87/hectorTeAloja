import axios from "axios"
import { urlProps } from "../mockups&utils/endpoint"
import { iconArray } from "../mockups&utils/iconArray";


export function usePropHandler() {

    const getProps = async (setProperties) => {
        const { data } = await axios(`${urlProps}`)
        console.log(data);
        setProperties(data.properties)
        return data.properties
    }

    const getPropById = async (setProperty, id) => {
        try {
            const res = await axios.get(`${urlProps}/${id}`)

            const booleanToRender = res.data.property.servicesBoolean.map(s => iconArray.filter(i => i.name == s))
            const notBooleanToRender = []
            console.log(res.data.property);
            for (const clave in res.data.property.servicesNotBoolean) {
                const value = res.data.property.servicesNotBoolean[clave]
                // console.log(clave, value);
                notBooleanToRender.push({ ...iconArray.filter(i => i.name == clave), value })
            }
            setProperty({ ...res.data.property, booleanToRender, notBooleanToRender })
        } catch (error) {
            console.log(error);
        }
    }

    const createProp = async () => {

    }

    const updateProp = async () => {

    }

    const deleteProp = async () => {
        try {

        } catch (error) {

        }
    }

    return { getProps, getPropById }
}