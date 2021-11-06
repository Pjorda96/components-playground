import { Container } from "./Login2Styles";

export default function Login2() {
  return (
    <Container>
      <div className="upper box">
        <h1>Login</h1>
        <h6>To access your dashboard</h6>
      </div>
      <div className="lower box">
        <div className="form">
          <div className="input">
            <input type="text" name="username" id="username" required/>
            <label htmlFor="username">Username</label>
          </div>

          <div className="input">
            <input type="password" name="password" id="password2" required/>
            <label htmlFor="password2">Password</label>
          </div>

          <button className="login-btn">Login</button>
        </div>
      </div>
    </Container>
  )
}
