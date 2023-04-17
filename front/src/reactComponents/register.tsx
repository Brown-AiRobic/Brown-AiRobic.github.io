import React, { useEffect } from "react";
import "../styling/App.css";
import Menu from "./menu";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";

const login = useGoogleLogin({
  onSuccess: (tokenResponse) => console.log(tokenResponse),
});

/* custom button
<button onClick={() => login()}>
  Sign in with Google 🚀{" "}
</button>;
*/


/**
 * https://www.youtube.com/watch?v=roxC8SMs7HU
 * google oauth for react 2023
 */
function Register() {
    return <Menu description={"Register page"} />;
}

<GoogleLogin
  onSuccess={(credentialResponse) => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log("Login Failed");
  }}
/>;

export default Register