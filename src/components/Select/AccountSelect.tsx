import { useState } from "react";
import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  MenuItem,
} from "./styles";

const sheetData = ["Account Name", "Account Name 2", "Account Name 3"];

interface AccountSelectProps {
  selectedAccount: string | null;
  setSelectedAccount: (account: string) => void;
}

/**
 * AccountSelect component allows users to select an account from a dropdown menu.
 *
 * @component
 * @param {AccountSelectProps} props - The properties for the AccountSelect component.
 * @param {string} props.selectedAccount - The currently selected account.
 * @param {Function} props.setSelectedAccount - Function to update the selected account.
 *
 * @returns {JSX.Element} The rendered AccountSelect component.
 */
function AccountSelect({
  selectedAccount,
  setSelectedAccount,
}: AccountSelectProps) {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  const handleAccountSelect = (sheet: string) => {
    setSelectedAccount(sheet);
    setIsAccountOpen(false);
  };
  return (
    <DropdownContainer>
      <DropdownButton
        isOpen={isAccountOpen}
        onClick={() => setIsAccountOpen((prev) => !prev)}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: 4,
            }}
          >
            <span style={{ fontSize: 14, fontWeight: 500 }}>
              {selectedAccount || "Select an Account"}
            </span>
          </div>
        </div>
        <img src="/down-chevron.png" />
      </DropdownButton>
      {isAccountOpen && (
        <DropdownMenu isTabOpen={false}>
          {sheetData.map((sheet) => (
            <MenuItem key={sheet} onClick={() => handleAccountSelect(sheet)}>
              {sheet}
            </MenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default AccountSelect;
