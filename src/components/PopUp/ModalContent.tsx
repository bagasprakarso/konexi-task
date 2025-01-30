import {
  ConnectionProps,
  ModalOpenProps,
  exportedDateProps,
} from "../../shared.types";
import ConnectToFlowNode from "../ConnectTo/FlowNode";
import ConnectToGoogle from "../ConnectTo/Google";
import ExportForm from "../Form/Form";
import Header from "../Header";
import { ModalContentWrapper } from "./styles";

interface ModalContentProps
  extends ModalOpenProps,
    ConnectionProps,
    exportedDateProps {}

/**
 * ModalContent component renders different content based on the connected status.
 * It displays a header and a form that changes depending on the connection status.
 *
 * @param {Object} props - The properties object.
 * @param {number} props.connectedStatus - The current connection status.
 * @param {Function} props.setConnectedStatus - Function to update the connection status.
 * @param {boolean} props.isModalOpen - Indicates if the modal is open.
 * @param {Function} props.setIsModalOpen - Function to update the modal open state.
 * @param {Date} props.exportedDate - The date when the data was exported.
 * @param {Function} props.setExportedDate - Function to update the exported date.
 *
 * @returns {JSX.Element} The rendered ModalContent component.
 */
function ModalContent({
  connectedStatus,
  setConnectedStatus,
  isModalOpen,
  setIsModalOpen,
  exportedDate,
  setExportedDate,
}: ModalContentProps) {
  return (
    <ModalContentWrapper>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </div>
      {/* Form */}
      <div>
        {connectedStatus === 0 ? (
          <ConnectToGoogle setConnectedStatus={setConnectedStatus} />
        ) : connectedStatus === 1 ? (
          <ConnectToFlowNode setConnectedStatus={setConnectedStatus} />
        ) : (
          <ExportForm
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            exportedDate={exportedDate}
            setExportedDate={setExportedDate}
          />
        )}
      </div>
    </ModalContentWrapper>
  );
}

export default ModalContent;
