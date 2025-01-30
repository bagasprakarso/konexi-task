import { ButtonStyled } from "../../styles/Button";
import NestedSelect from "../Select/NestedSelect";
import { timeAgo } from "../../utils/helpers";
import AccountSelect from "../Select/AccountSelect";
import { BoldFont } from "../../styles/Typography";
import { FormWrapper } from "./styles";
import { useState } from "react";
import { ModalOpenProps, exportedDateProps } from "../../shared.types";

interface ExportFormProps extends ModalOpenProps, exportedDateProps {}

/**
 * ExportForm component allows users to select a Google account, a file, and a tab,
 * and then export the selected data to a new Google Sheet.
 *
 * @param {Object} props - The properties object.
 * @param {boolean} props.isModalOpen - Indicates if the modal is open.
 * @param {Function} props.setIsModalOpen - Function to set the modal open state.
 * @param {Date | null} props.exportedDate - The date when the export was last performed.
 * @param {Function} props.setExportedDate - Function to set the exported date.
 *
 * @returns {JSX.Element} The rendered ExportForm component.
 */
function ExportForm({
  isModalOpen,
  setIsModalOpen,
  exportedDate,
  setExportedDate,
}: ExportFormProps) {
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [selectedSheet, setSelectedSheet] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const handleExportClicked = () => {
    setExportedDate(new Date());
    setIsModalOpen(!isModalOpen);
    window.open("https://sheets.new", "_blank");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <FormWrapper>
        <BoldFont>Google Account</BoldFont>
        <AccountSelect
          selectedAccount={selectedAccount}
          setSelectedAccount={setSelectedAccount}
        />
      </FormWrapper>
      <FormWrapper>
        <BoldFont>File</BoldFont>
        <NestedSelect
          selectedSheet={selectedSheet}
          setSelectedSheet={setSelectedSheet}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </FormWrapper>
      <FormWrapper>
        <ButtonStyled
          disabled={!selectedAccount || !selectedSheet || !selectedTab}
          onClick={() => handleExportClicked()}
        >
          Export
        </ButtonStyled>
      </FormWrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 12, color: "#8b8b8b" }}>
          {timeAgo(exportedDate) ?? ""}
        </span>
      </div>
    </div>
  );
}

export default ExportForm;
