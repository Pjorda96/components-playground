import { Container } from "./Login1Styles";

export default function Login1() {
  return (
    <Container>
      <h1 className="title">Log In</h1>

      <div className="inputs-section">
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="example@example.com" autoComplete="off" id="email"/>
        </div>

        <div className="input">
          <label htmlFor="password">Password</label>
          <input type="password" id="password"/>
        </div>

        <div className="forgot"><a href="#0">Forgot password?</a></div>
      </div>

      <button className="footer">Log In</button>
    </Container>
  )
}
