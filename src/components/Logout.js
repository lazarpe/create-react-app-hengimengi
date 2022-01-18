import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "227604092914-e67i0e6j7bblru8amchmmr3nq38cvs0h.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    console.log("Logout made successfully");
    alert("Logout made successfully");
    document.getElementById("googleLogout").style.visibility = "hidden";
    document.getElementById("googleLogin").style.visibility = "visible";
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
