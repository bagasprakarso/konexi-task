import { useState } from "react";
import { ButtonStyled } from "../../styles/Button";
import PopupModal from "../PopUp";

/**
 * TableHeader component renders a button to export data to Google Sheets and a popup modal.
 *
 * @component
 * @example
 * return (
 *   <TableHeader />
 * )
 *
 * @remarks
 * The component maintains three pieces of state:
 * - `connectedStatus`: Indicates the connection status (0 = not connected, 1 = connected to Google, 2 = connected to flow node).
 * - `isModalOpen`: Controls the visibility of the popup modal.
 * - `exportedDate`: Stores the date when data was last exported.
 *
 * @returns {JSX.Element} The rendered TableHeader component.
 */

function TableHeader() {
  const [connectedStatus, setConnectedStatus] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [exportedDate, setExportedDate] = useState<Date | undefined>(undefined);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <ButtonStyled onClick={() => setIsModalOpen(!isModalOpen)}>
          Export to Google Sheets
        </ButtonStyled>
      </div>
      <PopupModal
        connectedStatus={connectedStatus}
        setConnectedStatus={setConnectedStatus}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        exportedDate={exportedDate}
        setExportedDate={setExportedDate}
      />
    </>
  );
}

export default TableHeader;
