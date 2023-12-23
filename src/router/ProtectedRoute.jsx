import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserContext } from '../context/UserContextB'

function ProtectedRoute({ children }) {
    const { token } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (token == '' || !token) {
            Swal.fire('Error', 'Debés iniciar sesión para ingresar a esta sección', 'error')
            const timeout = setTimeout(() => {
                clearTimeout(timeout)
                navigate('/', { replace: true })
            }, 2000);
            return
        }
    }, [])

    return (
        <>
            {children}
        </>
    )

}

export default ProtectedRoute