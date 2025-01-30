import styled from "@emotion/styled";

/**
 * MainTableWrapper is a styled div component that serves as a wrapper for the main table.
 * It uses flexbox to arrange its children in a column with a gap of 16px between them.
 */
export const MainTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/**
 * TH is a styled th component that represents a table header cell.
 * It has a border with a color of #808080.
 */
export const TH = styled.th`
  border: 1px solid #808080;
`;

/**
 * TD is a styled td component that represents a table data cell.
 * It has padding of 4px and a border with a color of #808080.
 */
export const TD = styled.td`
  padding: 4px;
  border: 1px solid #808080;
`;
