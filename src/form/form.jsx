import { useContext } from "react";
import "./styles.css";
import { FormValidationContext } from "./form-validation";
export default function Form() {
  const {
    username,
    password,
    mobile,
    setUsername,
    setPassword,
    setMobile,
    setConfirmPassword,
    confirmPassword,
    userNameStatus,
    passwordStatus,
    mobileStatus,
    formsSubmitted,
    getFormData,
  } = useContext(FormValidationContext);

  const strengthOfPassword = {
    color:
      passwordStatus === "Weak"
        ? "salmon"
        : passwordStatus === "Medium"
        ? "yellow"
        : passwordStatus === "Strong"
        ? "green"
        : "salmon",
  };

  return (
    <form onSubmit={getFormData}>
      <div>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          name="username"
          placeholder="Type your username"
        />
        <p
          className={
            userNameStatus === "username is valid" ? "valid" : "invalid "
          }
        >
          {userNameStatus}
        </p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Type your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <p style={strengthOfPassword}>{passwordStatus}</p>
        <p>Password should include a digit and a uppercase letter</p>
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <p>Password do not match.</p>
      </div>
      <div>
        <input
          type="number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          name="mobile"
          placeholder="Enter your mobile"
        />
        <p className={mobileStatus !== "" ? "invalid" : ""}>{mobileStatus}</p>
      </div>

      <button>Submit</button>
      <p>{formsSubmitted}</p>
    </form>
  );
}
