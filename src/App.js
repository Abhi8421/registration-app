import "./App.css";
import { useState } from "react";
import "react-table-6/react-table.css";
import { RegistrationFrom } from "./RegistrationForm";
import { RegistrationDetailsTable } from "./RegistrationDetailsTable";

function App() {
  const [candidateEntires, setCandidateEntires] = useState([]);
  return (
    <div className="layout">
      <RegistrationDetailsTable candidateEntires={candidateEntires} />
      <RegistrationFrom
        candidateEntires={candidateEntires}
        setCandidateEntires={setCandidateEntires}
      />
    </div>
  );
}

export default App;
