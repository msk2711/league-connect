import {useRouteError} from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();
    console.log( error );

    return (
        <div id="error-page">
            <h1>Ooooops!!!!</h1>
            <p>This page not exist</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}