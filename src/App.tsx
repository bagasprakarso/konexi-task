import React from "react";
import MainTable from "./components/Table";

/**
 * The main application component.
 *
 * This component serves as the root of the application and renders the `MainTable` component inside a div with the class name "app".
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App: React.FC = () => {
  return (
    <div className="app">
      <MainTable />
    </div>
  );
};

export default App;
