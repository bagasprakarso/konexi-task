import styled from "@emotion/styled";

/**
 * A styled button component with predefined styles.
 *
 * - `color`: Sets the text color to white.
 * - `border`: Removes the default border.
 * - `border-radius`: Rounds the corners with a 4px radius.
 * - `padding`: Adds 8px vertical and 12px horizontal padding.
 * - `background-color`: Sets the background color to #2383f3.
 * - `cursor`: Changes the cursor to a pointer when hovered.
 *
 * Disabled state:
 * - `background-color`: Changes the background color to #8bbcf7.
 * - `cursor`: Changes the cursor to not-allowed.
 * - `opacity`: Reduces the opacity to 0.6.
 */

export const ButtonStyled = styled.button`
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: #2383f3;
  cursor: pointer;

  &:disabled {
    background-color: 2383f3;
    cursor: not-allowed;
    background-color: #8bbcf7;
    opacity: 0.6;
  }
`;
