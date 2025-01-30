import {
  ConnectionProps,
  ModalOpenProps,
  exportedDateProps,
} from "../../shared.types";
import ModalContent from "./ModalContent";
import { ModalContainer, ModalOverlay } from "./styles";

interface PopupModalProps
  extends ModalOpenProps,
    ConnectionProps,
    exportedDateProps {}

/**
 * PopupModal component renders a modal overlay with a container and content.
 * The modal is displayed based on the `isModalOpen` prop.
 *
 * @param {boolean} connectedStatus - The current connection status.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setConnectedStatus - Function to update the connection status.
 * @param {boolean} isModalOpen - Flag to determine if the modal is open.
 * @param {React.Dispatch<React.SetStateAction<boolean>>} setIsModalOpen - Function to update the modal open state.
 * @param {Date} exportedDate - The date when data was exported.
 * @param {React.Dispatch<React.SetStateAction<Date>>} setExportedDate - Function to update the exported date.
 *
 * @returns {JSX.Element} The rendered PopupModal component.
 */
export default function PopupModal({
  connectedStatus,
  setConnectedStatus,
  isModalOpen,
  setIsModalOpen,
  exportedDate,
  setExportedDate,
}: PopupModalProps) {
  return (
    <div>
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <ModalContent
              connectedStatus={connectedStatus}
              setConnectedStatus={setConnectedStatus}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              exportedDate={exportedDate}
              setExportedDate={setExportedDate}
            />
          </ModalContainer>
        </ModalOverlay>
      )}
    </div>
  );
}
