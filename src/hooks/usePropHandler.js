import axios from "axios"
import { urlProps } from "../mockups&utils/endpoint"
import { iconArray } from "../mockups&utils/iconArray";
import Swal from "sweetalert2";
import { deleteFile } from "../firebase/config";

export function usePropHandler() {

    const getProps = async (setProperties) => {
        const { data } = await axios(`${urlProps}`)
        // console.log(data);
        setProperties(data.properties)
        return data.properties
    }

    const getPropById = async (setProperty, id) => {
        try {
            const res = await axios.get(`${urlProps}/${id}`)
            const booleanToRender = res.data.property.servicesBoolean.map(service => iconArray.filter(i => i.name == service))
            const notBooleanToRender = []
            // console.log(res.data.property);
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

    const createProp = async (newProperty, token) => {
        console.log(newProperty);
        try {
            const res = await axios.post(urlProps, newProperty, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            // console.log(res);
            Swal.fire('Éxito', 'La propiedad se creó correctamente.', "success")
        } catch (error) {
            Swal.fire('Algo salió mal', 'Hubo problema al crear la propiedad, intente más tarde', 'error')
            console.log(error);
        }
    }

    const updateProp = async () => {

    }

    const deleteProp = async (id, token) => {
        try {
            const { data } = await axios.delete(`${urlProps}/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const urlsToDelete = await getProps().filter(prop => prop._id == id)
            deleteFile(urlsToDelete[0].gallery)
            Swal.fire('Propiedad Eliminada', `La propiedad ${data.deleteProperty.name} fue eliminada con éxito`, "success").then((result) => {
                window.location.reload(true)
            })
        } catch (error) {
            console.log(error);
        }
    }

    return { getProps, getPropById, deleteProp, createProp, updateProp }
}