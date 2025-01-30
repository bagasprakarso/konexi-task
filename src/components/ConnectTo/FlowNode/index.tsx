import { MediumFont } from "../../../styles/Typography";
import { Wrapper } from "./styles";

/**
 * ConnectToFlowNode component.
 *
 * This component renders a clickable wrapper that, when clicked, sets the connected status to 2.
 * It displays an image and a text indicating the action of connecting the flow node to import data to Google Sheets.
 *
 * @param {Object} props - The component props.
 * @param {React.Dispatch<React.SetStateAction<number>>} props.setConnectedStatus - Function to update the connected status.
 * @returns {JSX.Element} The rendered component.
 */
function ConnectToFlowNode({
  setConnectedStatus,
}: {
  setConnectedStatus: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <Wrapper onClick={() => setConnectedStatus(2)}>
      <img src="/database.png" width={16} />
      <MediumFont>Connect Flow Node to Import to Google Sheets</MediumFont>
    </Wrapper>
  );
}

export default ConnectToFlowNode;
