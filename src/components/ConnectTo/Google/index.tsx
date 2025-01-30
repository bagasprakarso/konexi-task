import { ButtonStyled } from "../../../styles/Button";
import { ImageWrapper, Wrapper } from "./styles";

interface ConnectToGoogleProps {
  setConnectedStatus: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Component to render a button for connecting to a Google account.
 *
 * @component
 * @param {ConnectToGoogleProps} props - The props for the component.
 * @param {function} props.setConnectedStatus - Function to update the connection status.
 *
 * @example
 * <ConnectToGoogle setConnectedStatus={setConnectedStatus} />
 *
 * @returns {JSX.Element} The rendered component.
 */
function ConnectToGoogle({ setConnectedStatus }: ConnectToGoogleProps) {
  return (
    <Wrapper>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <ImageWrapper>
          <img src="/google.png" width={20} />
        </ImageWrapper>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <span style={{ fontWeight: 600 }}>Connect Google Account</span>
          <span style={{ fontSize: 12, color: "#8b8b8b" }}>
            Please connect Google Account to use this block
          </span>
        </div>
      </div>

      <div>
        <ButtonStyled onClick={() => setConnectedStatus(1)}>
          <span style={{ fontSize: 12 }}>Connect</span>
        </ButtonStyled>
      </div>
    </Wrapper>
  );
}

export default ConnectToGoogle;
