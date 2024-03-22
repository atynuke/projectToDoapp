import { useState } from "react";
import "./form.module.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form action="">
      <div>
        <h1>React Form</h1>
        <div>
        <label htmlFor="">First Name:</label>
            <br />
          <input
            name="First name"
            type="First name"
            placeholder="Enter your first Name"
          />
        </div>
        <br />
        <div>
        <label htmlFor="">Last Name:</label>
            <br />
          <input
            name="Last name"
            type="Last name"
            placeholder="Enter your last Name"
          />
        </div>
        <br />
        <div>
        <label htmlFor="">Username:</label>
            <br />
          <input
            name="UserName"
            type="UserName"
            placeholder="Enter your username"
          />
        </div>
        <br />
        <label htmlFor="">Gender:</label>
            <br />
        <select name="gender" id="Gender">
         <option value="Male">Male</option>
         <option value="female">Female</option>
        </select>

        <br />
        <br />
        <div>
            <label htmlFor="">Password:</label>
            <br />
          <input
            input
            name="password"
            type="password"
            placeholder="*********"
          />
        </div>
        <br />
      </div>
    </form>
  );
};

export default Form;
