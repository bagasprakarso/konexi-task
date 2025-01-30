import styled from "@emotion/styled";

/**
 * ModalOverlay is a styled div component that serves as the overlay for a modal.
 * It covers the entire viewport with a semi-transparent black background.
 *
 * Styles applied:
 * - `position: fixed`: Ensures the overlay stays in place relative to the viewport.
 * - `top: 0`, `left: 0`: Positions the overlay at the top-left corner of the viewport.
 * - `width: 100%`, `height: 100%`: Makes the overlay cover the entire viewport.
 * - `background: rgba(0, 0, 0, 0.5)`: Applies a semi-transparent black background.
 * - `display: flex`: Uses flexbox for centering content.
 * - `align-items: center`, `justify-content: center`: Centers the modal content both vertically and horizontally.
 */

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * ModalContainer is a styled div component that serves as the container for the modal content.
 *
 * Styles applied:
 * - `background: white`: Sets the background color to white.
 * - `border-radius: 8px`: Rounds the corners with an 8px radius.
 * - `max-width: 90%`: Limits the maximum width to 90% of the viewport width.
 * - `box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1)`: Adds a subtle shadow for depth.
 * - `position: relative`: Positions the container relative to its normal position.
 */
export const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  max-width: 90%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

/**
 * ModalContentWrapper is a styled div component that wraps the content inside the modal.
 *
 * Styles applied:
 * - `display: flex`: Uses flexbox for layout.
 * - `flex-direction: column`: Arranges children in a column.
 * - `gap: 16px`: Adds a 16px gap between children.
 * - `width: 500px`: Sets the width to 500px.
 * - `padding: 16px`: Adds 16px padding inside the wrapper.
 * - `border-radius: 8px`: Rounds the corners with an 8px radius.
 */
export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 500px;
  padding: 16px;
  border-radius: 8px;
`;
