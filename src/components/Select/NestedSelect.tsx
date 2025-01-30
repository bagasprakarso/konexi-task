import React, { useState } from "react";

import {
  DropdownButton,
  DropdownContainer,
  DropdownMenu,
  MenuItem,
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "./styles";

const sheetData: { [key: string]: string[] } = {
  Sheet1: ["Tab 1", "Tab 2", "Tab 3"],
  Sheet2: ["Tab A", "Tab B"],
  Sheet3: ["Tab X", "Tab Y", "Tab Z"],
};

interface NestedSelectProps {
  selectedSheet: string | null;
  setSelectedSheet: (sheet: string | null) => void;
  selectedTab: string | null;
  setSelectedTab: (tab: string | null) => void;
}

/**
 * A component that renders a nested dropdown selection for sheets and tabs.
 *
 * @component
 * @param {NestedSelectProps} props - The props for the NestedSelect component.
 * @param {string | null} props.selectedSheet - The currently selected sheet.
 * @param {React.Dispatch<React.SetStateAction<string | null>>} props.setSelectedSheet - Function to set the selected sheet.
 * @param {string | null} props.selectedTab - The currently selected tab.
 * @param {React.Dispatch<React.SetStateAction<string | null>>} props.setSelectedTab - Function to set the selected tab.
 *
 * @returns {JSX.Element} The rendered NestedSelect component.
 *
 * @example
 * <NestedSelect
 *   selectedSheet={selectedSheet}
 *   setSelectedSheet={setSelectedSheet}
 *   selectedTab={selectedTab}
 *   setSelectedTab={setSelectedTab}
 * />
 */
function NestedSelect({
  selectedSheet,
  setSelectedSheet,
  selectedTab,
  setSelectedTab,
}: NestedSelectProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isTabOpen, setIsTabOpen] = useState(false);
  const [tabSearch, setTabSearch] = useState("");

  const handleSheetSelect = (e: React.MouseEvent, sheet: string) => {
    e.stopPropagation(); // Prevents unwanted toggling
    setSelectedSheet(sheet);
    setSelectedTab(null);
    setIsSheetOpen(false);
  };

  const handleTabSelect = (e: React.MouseEvent, tab: string) => {
    e.stopPropagation(); // Prevents toggling the sheet dropdown
    setSelectedTab(tab);
    setIsTabOpen(false);
  };

  const filteredTabs = selectedSheet
    ? sheetData[selectedSheet].filter((tab) =>
        tab.toLowerCase().includes(tabSearch.toLowerCase())
      )
    : [];

  return (
    <div>
      <DropdownContainer>
        <DropdownButton
          isOpen={isSheetOpen}
          onClick={() => {
            setIsSheetOpen((prev) => !prev);
          }}
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
              <img src="/sheets.png" width={20} />
              <span style={{ fontSize: 14, fontWeight: 500 }}>
                {selectedSheet || "Select a Sheet"}
              </span>
            </div>
            {selectedSheet && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <DropdownButton
                  isOpen={isTabOpen}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTabOpen((prev) => !prev);
                  }}
                  style={{
                    borderRadius: "50px",
                    marginRight: 8,
                    backgroundColor: "#f5f5f5",
                    color: "#8e8e8e",
                    fontSize: 12,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: 8,
                      padding: "4px 8px",
                    }}
                  >
                    <span>{selectedTab || "Select a Tab"}</span>
                    <img src="/down-chevron.png" width={8} />
                  </div>
                </DropdownButton>
                {isTabOpen && (
                  <DropdownMenu isTabOpen>
                    <SearchContainer>
                      <SearchIcon>
                        <img src="/search.png" />
                      </SearchIcon>
                      <SearchInput
                        type="text"
                        placeholder="Search"
                        value={tabSearch}
                        onChange={(e) => setTabSearch(e.target.value)}
                      />
                    </SearchContainer>

                    {filteredTabs.map((tab: string) => (
                      <MenuItem
                        key={tab}
                        onClick={(e) => handleTabSelect(e, tab)}
                      >
                        {tab}
                        {selectedTab === tab && <img src="/blue-tick.png" />}
                      </MenuItem>
                    ))}
                  </DropdownMenu>
                )}
              </div>
            )}
          </div>
          <img src="/down-chevron.png" />
        </DropdownButton>

        {isSheetOpen && (
          <DropdownMenu isTabOpen={false}>
            {Object.keys(sheetData).map((sheet) => (
              <MenuItem
                key={sheet}
                onClick={(e) => handleSheetSelect(e, sheet)}
              >
                {sheet}
              </MenuItem>
            ))}
          </DropdownMenu>
        )}
      </DropdownContainer>
    </div>
  );
}

export default NestedSelect;
