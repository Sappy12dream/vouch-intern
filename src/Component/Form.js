import React, { useContext, useEffect, useState } from "react";
import api from "../Api/api";
import AuthContext from "../Context/AuthContext";

function Form() {
  const { setauth } = useContext(AuthContext);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [errMsg, seterrMsg] = useState("");
  const [success, setsuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(
        "/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setemail("");
      setpassword("");
      setsuccess(true);
      setauth(res.data);
    } catch (error) {
      if (error?.response?.status === 400) {
        seterrMsg("invalid credentials");
      }
    }
  };
  useEffect(() => {
    seterrMsg("");
  }, [email, password]);
  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1 className="formTitle">Welcome Back</h1>
          <p className="formSubTitle">Sub-title text goes here</p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Enter email"
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          <div className="extra-features">
            <div className="rem">
              <input type="checkbox" />
              <p>Remmember me</p>
            </div>
            <p>Forget password?</p>
          </div>
        </form>
        <p className={success ? "green" : "red"}>
          {success ? "Login Successfully!" : errMsg}
        </p>
      </div>
    </div>
  );
}

export default Form;
