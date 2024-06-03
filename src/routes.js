import { createBrowserRouter } from "react-router-dom";
import App from './App';
import AddProduct from './Pages/AddProduct/AddProduct';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/admin/addproduct",
        element: <AddProduct />,
    },
]);