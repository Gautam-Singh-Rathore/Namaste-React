import {useRouteError} from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    return(
        <>
            <h1>Oops!!</h1>
            <h1>Something went wrong</h1>
        </>
    );
}
export default Error;