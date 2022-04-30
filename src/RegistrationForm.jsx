import "./customCss.css";
import { useState } from "react";

export const RegistrationFrom = (props) => {
  const { candidateEntires, setCandidateEntires } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const startID = 1;
  const onGenderChange = (gender) => {
    setGender(gender);
  };

  const onSubmit = () => {
    if (firstName && lastName && email && gender) {
      const candidate = {
        id: startID,
        first_name: firstName,
        last_name: lastName,
        email,
        gender,
      };
      setCandidateEntires([candidate, ...candidateEntires]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("male");
    }
  };
  return (
    <div className="registration-form-layout">
      <span className="component-header">Add New Candidate</span>
      <div className="form">
        <div className="inline-elements">
          <input
            type="text"
            name="firtsName"
            placeholder="First Name"
            className="name-input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            name="=lastName"
            placeholder="Last Name"
            className="name-input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="inline-elements-radio-buttons radio-buttons">
          <div>
            <input
              type="radio"
              value="male"
              checked={gender === "male" ? true : false}
              onChange={(e) => onGenderChange(e.target.value)}
            />
            <label className="label">Male</label>
          </div>
          <div>
            <input
              type="radio"
              value="female"
              checked={gender === "female" ? true : false}
              onChange={(e) => onGenderChange(e.target.value)}
            />
            <label className="label">Female</label>
          </div>
          <button type="submit" className="submit-button" onClick={onSubmit}>
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};
