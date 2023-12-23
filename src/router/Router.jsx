import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Landing from "../pages/Landing";
import ProtectedRoute from "./ProtectedRoute";
import NewProperty from "../pages/NewProperty";
import Property from "../pages/Property";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/propiedad/:id', element: <Property /> },
            {
                path: '/nuevapropiedad', element:
                    <ProtectedRoute>
                        <NewProperty />
                    </ProtectedRoute>
            }
        ]
    }
])

export default router