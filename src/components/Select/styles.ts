import styled from "@emotion/styled";

/**
 * A styled div component that serves as a container for the dropdown.
 * It has a relative position to allow absolute positioning of its children.
 */
export const DropdownContainer = styled.div`
  position: relative;
`;

/**
 * A styled div component that represents a dropdown button.
 *
 * @param {boolean} isOpen - Determines the border color of the button.
 *
 * The button has the following styles:
 * - Border: 1px solid, color changes based on `isOpen` prop.
 * - Background color: white.
 * - Padding: 4px 8px.
 * - Border radius: 8px.
 * - Display: flex.
 * - Align items: center.
 * - Justify content: space-between.
 * - Cursor: pointer.
 * - Box shadow: 0 1px 3px rgba(0, 0, 0, 0.1).
 * - Transition: all 0.2s.
 *
 * On hover, the box shadow changes to 0 2px 6px rgba(0, 0, 0, 0.15).
 */
export const DropdownButton = styled.div<{ isOpen: boolean }>`
  border: 1px solid ${({ isOpen }) => (isOpen ? "#3b82f6" : "#d1d5db")};
  background-color: #fff;
  padding: 4px 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
`;

/**
 * A styled component for the dropdown menu.
 *
 * @component
 * @example
 * // Usage example
 * <DropdownMenu isTabOpen={true} />
 *
 * @param {boolean} isTabOpen - Determines the width and position of the dropdown menu.
 *
 * @styled
 * The component is styled using styled-components.
 * - `position: absolute;`
 * - `z-index: 10;`
 * - `margin-top: 8px;`
 * - `background-color: #fff;`
 * - `border: 1px solid #d1d5db;`
 * - `border-radius: 8px;`
 * - `box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);`
 * - `width: ${({ isTabOpen }) => (isTabOpen ? "170px" : "100%")};`
 * - `top: 100%;` if `isTabOpen` is true.
 */
export const DropdownMenu = styled.div<{ isTabOpen: boolean }>`
  position: absolute;
  z-index: 10;
  margin-top: 8px;
  background-color: #fff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  width: ${({ isTabOpen }) => (isTabOpen ? "170px" : "100%")};
  ${({ isTabOpen }) => (isTabOpen ? "top: 100%" : "")};
`;

/**
 * Styled component for a menu item.
 *
 * This component is a styled `div` element that displays its children in a flex container,
 * aligns them to the center, and adds a gap of 8px between them. It also includes padding,
 * a specific font size, and a pointer cursor. When the menu item is hovered over, its background
 * color changes to a light blue shade (#eff6ff).
 */
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #eff6ff;
  }
`;

/**
 * A styled container component for the search functionality.
 *
 * This container is positioned relatively, has padding of 8px,
 * and uses flexbox to align its children in the center.
 */
export const SearchContainer = styled.div`
  position: relative;
  padding: 8px;
  display: flex;
  align-items: center;
`;

/**
 * Styled component for the search icon within a select input.
 *
 * This component is a styled `span` element that positions the search icon
 * absolutely within its container. The icon is centered vertically and
 * positioned 12 pixels from the left edge of the container. The color of the
 * icon is set to a neutral gray (#9ca3af), and pointer events are disabled
 * to prevent interaction.
 */
export const SearchIcon = styled.span`
  position: absolute;
  top: 55%;
  left: 12px; /* 0.75rem to px */
  transform: translateY(-50%);
  color: #9ca3af; /* Neutral gray for icon */
  pointer-events: none;
`;

/**
 * Styled input component for search functionality.
 *
 * This component applies specific styles to an input element, including:
 * - A fixed width of 120px.
 * - Padding of 8px on the top, right, and bottom, and 24px on the left.
 * - A border with a color of #d1d5db and a width of 1px.
 * - Rounded corners with a border-radius of 8px.
 */
export const SearchInput = styled.input`
  width: 120px;
  padding: 8px 8px 8px 24px; /* 0.5rem to px and 1.5rem to px */
  border: 1px solid #d1d5db;
  border-radius: 8px; /* 0.5rem to px */
`;
