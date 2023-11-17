import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Landing from "../pages/Landing";
import Property from "../components/Property";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: '/', element: <Landing /> },
            { path: '/propiedad/:id', element: <Property /> }
        ]
    }

])

export default router