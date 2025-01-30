import styled from "@emotion/styled";

/**
 * Wrapper is a styled div component that serves as a container with the following styles:
 * - Displays its children in a flex container.
 * - Takes up the full width of its parent container.
 * - Justifies content with space between them.
 * - Aligns items to the center vertically.
 * - Adds a gap of 12px between the children.
 */
export const Wrapper = styled.div`
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`;

/**
 * A styled div component that serves as a wrapper for the title section.
 * It uses flexbox to layout its children with a gap of 12px between them.
 * The children are spaced out evenly with `justify-content: space-between`
 * and aligned to the center vertically with `align-items: center`.
 */
export const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  align-items: center;
`;

/**
 * A styled div component that serves as a wrapper for images.
 *
 * @component
 * @example
 * <ImageWrapper>
 *   <img src="example.jpg" alt="example" />
 *   <img src="example2.jpg" alt="example2" />
 * </ImageWrapper>
 *
 * @remarks
 * This component uses flexbox to align its children with a gap of 12px between them.
 * It also has a background color of #e6f6f1, padding of 8px, and a border radius of 4px.
 */
export const ImageWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #e6f6f1;
  padding: 8px;
  border-radius: 4px;
`;

/**
 * A styled div component that serves as a wrapper for close button elements.
 *
 * @component
 * @example
 * return (
 *   <CloseWrapper>
 *     <CloseIcon />
 *     <span>Close</span>
 *   </CloseWrapper>
 * )
 *
 * @styled
 * - Displays its children in a flex container with a gap of 12px between them.
 * - Aligns its children to the center vertically.
 * - Has a light grey background color (#efefef).
 * - Adds padding of 4px around its content.
 * - Rounds its corners with a border-radius of 4px.
 * - Changes the cursor to a pointer when hovered over.
 */
export const CloseWrapper = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  background-color: #efefef;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;
`;
