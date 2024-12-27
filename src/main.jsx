
import About from './pages/About';
import ReactDOM from 'react-dom/client';
import App from './app';


import {createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
    }
]
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    < RouterProvider router={router} />);