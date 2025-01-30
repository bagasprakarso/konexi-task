import { ModalOpenProps } from "../../shared.types";
import { CloseWrapper, ImageWrapper, TitleWrapper, Wrapper } from "./styles";

/**
 * Header component that displays a title and a close button.
 *
 * @param {ModalOpenProps} props - The properties for the Header component.
 * @param {boolean} props.isModalOpen - Indicates whether the modal is open.
 * @param {function} props.setIsModalOpen - Function to set the modal open state.
 *
 * @returns {JSX.Element} The rendered Header component.
 */
function Header({ isModalOpen, setIsModalOpen }: ModalOpenProps) {
  return (
    <Wrapper>
      <TitleWrapper>
        <ImageWrapper>
          <img src="/sheets.png" width={20} />
        </ImageWrapper>
        <span style={{ fontSize: 18, fontWeight: 600 }}>
          Export to Google Sheets
        </span>
      </TitleWrapper>
      <CloseWrapper onClick={() => setIsModalOpen(!isModalOpen)}>
        <img src="/trash.png" width={20} />
      </CloseWrapper>
    </Wrapper>
  );
}

export default Header;
