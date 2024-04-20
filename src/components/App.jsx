import { useState } from "react";
import LoginScreen from "./LoginScreen";
function App() {
  let [isLoggedIn, setisLoggedIn] = useState(false)
  const handleLogin = () =>{
    setisLoggedIn(true);
  }
  if(isLoggedIn)
  return (<p>Successfully logged in!!!</p>)
  else{
  return (
    <>
      <LoginScreen onLogin={handleLogin}/>
    </>
  );
}
}
export default App;
