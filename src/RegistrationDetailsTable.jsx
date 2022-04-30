import "./customCss.css";
import { useEffect, useState } from "react";
import ReactTable from "react-table-6";

export const RegistrationDetailsTable = (props) => {
  const { candidateEntires } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [filteredData, setfilteredData] = useState([]);

  const columns = [
    { Header: "Id", accessor: "id" },
    { Header: "First Name", accessor: "first_name" },
    { Header: "Last Name", accessor: "last_name" },
    { Header: "Email", accessor: "email" },
    { Header: "Gender", accessor: "gender" },
  ];

  useEffect(() => {
    const results = candidateEntires.filter((row) => {
      return (
        row.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.email.toString().toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setfilteredData(results);
  }, [searchTerm, candidateEntires]);

  const tableDataSource = searchTerm.length ? filteredData : candidateEntires;

  const filterByGender =
    (male && female) || (!male && !female)
      ? tableDataSource
      : tableDataSource.filter((row) => {
          return male ? row.gender === "male" : row.gender === "female";
        });

  return (
    <div className="registration-table-layout">
      <span className="component-header">Candidates</span>
      <div className="table-filters">
        <div>
          <input
            type="checkbox"
            name="Male"
            checked={male}
            onChange={(e) => setMale(e.target.checked)}
            className="checkbox-field"
          />
          <label className="label">Male</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="Female"
            checked={female}
            onChange={(e) => setFemale(e.target.checked)}
            className="checkbox-field"
          />
          <label className="label">Female</label>
        </div>
        <input
          type="text"
          placeholder="Whom are you looking for ?"
          className="search-box"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div>
        <ReactTable
          data={filterByGender}
          columns={columns}
          defaultPageSize={10}
          pageSizeOptions={[2, 4, 6]}
        />
      </div>
    </div>
  );
};
