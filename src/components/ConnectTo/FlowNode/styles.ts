import styled from "@emotion/styled";

/**
 * A styled div component that serves as a wrapper with the following styles:
 * - Displays its children in a flex container.
 * - Adds a gap of 12px between child elements.
 * - Applies padding of 8px.
 * - Centers its child elements both vertically and horizontally.
 * - Sets the background color to #efefef.
 * - Rounds the corners with a border-radius of 50px.
 * - Changes the cursor to a pointer when hovered.
 */
export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: #efefef;
  border-radius: 50px;
  cursor: pointer;
`;
