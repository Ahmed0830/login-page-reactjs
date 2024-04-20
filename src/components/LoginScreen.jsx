function LoginScreen({onLogin}){
    const handleButton = (event) => {
        event.preventDefault();
        let email = document.getElementById("uname").value;
        let password = document.getElementById("pass").value;
        if(email === "admin@email.com" && password === "admin")
        onLogin();

    }
    return(
        <div className="login-container">
            <form onSubmit={handleButton}>
            <h3>Login</h3>
            <label htmlFor="uname">Username or Email: </label>
            <input id = "uname"  className ="info" type = "email" />
            <label htmlFor="pass">Password: </label>
            <input id = "pass" className = "info" type = "password" />
            <button type = "submit">Login</button>
            </form>
        </div>
    )
}
export default LoginScreen