import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Landing from "../pages/Landing";
import ProtectedRoute from "./ProtectedRoute";
import NewProperty from "../pages/NewProperty";
import Property from "../pages/Property";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <NotFound />,
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
    },
    { path: '*', element: <NotFound /> }
])

export default router