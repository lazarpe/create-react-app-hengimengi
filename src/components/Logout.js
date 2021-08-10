import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '506522399978-vfntku2kuffs8116qd19fm7hoo4c1k5s.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully');
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