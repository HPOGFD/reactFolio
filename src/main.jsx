// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Error from './pages/ErrorPage'; // Ensure this file exists
import AboutmePage from './pages/AboutmePage';
import Projects from './pages/ProjectsPage';
import Contact from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AboutmePage /> },
      { path: 'Projects', element: <Projects /> },
      { path: 'Contact', element: <Contact /> },
      { path: 'resume', element: <ResumePage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);