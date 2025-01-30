import styled from "@emotion/styled";

/**
 * Wrapper is a styled div component that applies flexbox layout with a column direction.
 * It includes a gap of 16px between child elements and a padding of 12px.
 */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 12px;
`;

/**
 * A styled div component that serves as a wrapper for images.
 *
 * This component applies the following styles:
 * - Displays its children in a flex container.
 * - Adds a gap of 12px between flex items.
 * - Aligns items in the center vertically.
 * - Sets the background color to a light grey (#f5f5f5).
 * - Adds padding of 12px around the content.
 * - Rounds the corners with a border-radius of 50px.
 */
export const ImageWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #f5f5f5;
  padding: 12px;
  border-radius: 50px;
`;
