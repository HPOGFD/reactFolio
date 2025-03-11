import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
    const error =  useRouteError();
    console.log(error);

    return (
<div>
    <h1>Oops! Something went wrong.</h1>
    <p>
       <i>{error.statustext || error.message}</i>
    </p>
</div>
    )
}