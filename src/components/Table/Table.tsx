import { TD, TH } from "./styles";

/**
 * A functional React component that renders a table with predefined data.
 * The table includes columns for Name, Age, Email, Phone, and Address.
 * Each row in the table represents a person with their respective details.
 *
 * @returns {JSX.Element} A JSX element representing the table.
 */
function Table() {
  return (
    <table
      style={{
        borderCollapse: "collapse",
        border: "1px solid #808080",
      }}
    >
      <thead>
        <tr>
          <TH>Name</TH>
          <TH>Age</TH>
          <TH>Email</TH>
          <TH>Phone</TH>
          <TH>Address</TH>
        </tr>
      </thead>
      <tbody>
        <tr>
          <TD>Bagas</TD>
          <TD>25</TD>
          <TD>bagas@example.com</TD>
          <TD>123-456-7890</TD>
          <TD>123 Main St</TD>
        </tr>
        <tr>
          <TD>Prakarso</TD>
          <TD>30</TD>
          <TD>prakarso@example.com</TD>
          <TD>234-567-8901</TD>
          <TD>456 Elm St</TD>
        </tr>
        <tr>
          <TD>John Doe</TD>
          <TD>28</TD>
          <TD>john.doe@example.com</TD>
          <TD>345-678-9012</TD>
          <TD>789 Oak St</TD>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
