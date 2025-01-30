import styled from "@emotion/styled";

/**
 * A styled span component that applies bold font styling.
 *
 * @component
 * @example
 * ```tsx
 * <BoldFont>This text will be bold and have a font size of 14px.</BoldFont>
 * ```
 *
 * @remarks
 * This component uses a font size of 14px and a font weight of 600.
 */
export const BoldFont = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

/**
 * A styled span component with medium font size and weight.
 *
 * @constant
 * @type {StyledComponent<'span', any>}
 * @example
 * <MediumFont>This is medium font text</MediumFont>
 */
export const MediumFont = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
