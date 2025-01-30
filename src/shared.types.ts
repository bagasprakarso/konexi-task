/**
 * Interface representing the properties required to manage the state of a modal.
 *
 * @property {boolean} isModalOpen - Indicates whether the modal is open or not.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setIsModalOpen - Function to update the modal open state.
 */

export interface ModalOpenProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Interface representing the properties required to manage the connection status.
 *
 * @property {number} connectedStatus - The current connection status.
 * @property {React.Dispatch<React.SetStateAction<number>>} setConnectedStatus - Function to update the connection status.
 */
export interface ConnectionProps {
  connectedStatus: number;
  setConnectedStatus: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * Interface representing the properties required to manage a exported date.
 *
 * @property {Date | undefined} exportedDate - The currently exported date, or undefined if no date is exported.
 * @property {React.Dispatch<React.SetStateAction<Date | undefined>>} setExportedDate - Function to update the exported date.
 */
export interface exportedDateProps {
  exportedDate: Date | undefined;
  setExportedDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}
