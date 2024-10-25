/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const FormValidationContext = createContext();

export default function FormValidation({ children }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [userNameStatus, setUserNameStatus] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");
  const [mobileStatus, setMobileStatus] = useState("");
  const [formsSubmitted, setFormsSubmitted] = useState("");

  function validateUsername() {
    if (username) {
      if (username.match(/[,.<>/?';-=~`!@#$%^&*()]/g)) {
        setUserNameStatus("Username must not contain any symbols");
        return false;
      } else {
        if (username.length > 6) {
          setUserNameStatus("username is valid");
          return true;
        }
      }
    } else {
      setUserNameStatus("Username field must not be empty");
      return false;
    }
  }

  useEffect(() => {
    validateUsername();
  }, [username]);

  function validatePassword() {
    if (password) {
      if (password.length < 10) {
        setPasswordStatus("Weak");
        return false;
      }
      if (
        password.length > 10 &&
        password.match(/[A-Z]/g) &&
        password.match(/[0-9]/g)
      ) {
        setPasswordStatus("Strong");
        return true;
      } else {
        setPasswordStatus("Medium");
        return false;
      }
    } else {
      setPasswordStatus("Password field must not be empty");
      return false;
    }
  }

  useEffect(() => {
    validatePassword();
  }, [password]);

  function validateMobile() {
    if (mobile) {
      if (mobile.length === 10) {
        setMobileStatus("");
        return true;
      } else {
        setMobileStatus("Mobile number must not exceed 10 digits");
        return false;
      }
    } else {
      setMobileStatus("Mobile field must not be empty");
      return false;
    }
  }

  useEffect(() => {
    validateMobile();
  }, [mobile]);

  function getFormData(e) {
    e.preventDefault();

    if (validatePassword() || validateUsername()) {
      setFormsSubmitted("Forms submitted");
      return true;
    } else {
      setFormsSubmitted("Fill out the forms");
      return false;
    }
  }

  return (
    <FormValidationContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        mobile,
        setMobile,
        getFormData,
        validateMobile,
        validatePassword,
        validateUsername,
        userNameStatus,
        passwordStatus,
        mobileStatus,
        formsSubmitted,
      }}
    >
      {children}
    </FormValidationContext.Provider>
  );
}
