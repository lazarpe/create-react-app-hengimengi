import React from "react";

import { GoogleLogin } from "react-google-login";
// refresh token
import { refreshTokenSetup } from "../utils/refreshToken";

let googleID = 1;
let userMail = "a";
let userName = "a";
let profileImg = "a";

let clientId =
  "506522399978-vfntku2kuffs8116qd19fm7hoo4c1k5s.apps.googleusercontent.com";

function Login() {
  const onSuccess = (res) => {
    console.log("Login Success: currentUser:", res.profileObj);
    refreshTokenSetup(res);
    document.getElementById("googleLogin").style.visibility = "hidden";
    document.getElementById("googleLogout").style.visibility = "visible";
    console.log(res.profileObj.googleId);
    console.log(res.profileObj.email);
    console.log(res.profileObj.name);
    console.log(res.profileObj.imageUrl);

    googleID = res.profileObj.googleId;
    userMail = res.profileObj.email;
    userName = res.profileObj.name;
    profileImg = res.profileObj.imageUrl;
    document.getElementById("profiledata").innerHTML = "profile information: ".concat([googleID, userMail, userName, profileImg]);

    // return(
    // <p>WOHOO</p>,
    // <img src={profileImg} />
    // );
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login`);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
  /*
  export const getInformation = () => {
    this.setState({
      email: res.profileObj.email
    })
    return (
      <div>
        <p>{this.state.email}</p>
      </div>
    )
  }
*/
}

export function getData() {
  var parent = document.getElementById("userdata");
  
  var newbie = document.createElement("div");
  newbie.innerHTML = "profile information: ".concat([googleID, userMail, userName, profileImg]);
  parent.appendChild(newbie);

  // var newDiv = document.createElement("div");
  // var newContent = document.createTextNode(
  //   "profile information: ".concat([googleID, userMail, userName, profileImg])
  // );
  // newDiv.appendChild(newContent);

  // var currentDiv = document.getElementById("userdata");
  // document.body.insertBefore(newDiv, currentDiv);

  console.log([googleID, userMail, userName, profileImg]);
  //return [googleID, userMail, userName, profileImg];
}

export default Login;
