import { MainTableWrapper } from "./styles";
import Table from "./Table";
import TableHeader from "./TableHeader";

/**
 * MainTable component renders the main table structure including the header and the table content.
 *
 * @component
 * @example
 * return (
 *   <MainTable />
 * )
 */
function MainTable() {
  return (
    <MainTableWrapper>
      <TableHeader />
      <Table />
    </MainTableWrapper>
  );
}

export default MainTable;
