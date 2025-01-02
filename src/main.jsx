
import React from 'react';
import Error from './pages/Error';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import ReactDOM from 'react-dom/client';
import App from './app';
import './style/index.css';

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
            },
            {
                path: 'Projects',
                element: <Projects />
            },
            {
                path: 'Contact',
                element: <Contact />
            },
            {
                path: 'resume',
                element: <Resume />
            }
]
}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    < RouterProvider router={router} />);