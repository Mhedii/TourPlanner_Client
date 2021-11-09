import React from "react";
// import "./login.css";
import useFirebase from "../hooks/useFirebase";

const Login = () => {
    const { handleGoogleLogin } = useFirebase();
    // console.log(handleGoogleLogin());

    return (
        <div>
            <div className="">
                <h1 className="text-danger ">Tour <span className="text-warning">Planner </span></h1>
            </div>
            <div className="login-box w-25 m-auto">
                <div className="box border border d-flex justify-content-center align-items-center">
                    <button onClick={handleGoogleLogin} className="btn w-75  btn-warning">
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
