"use client"
import React, { useState, useEffect } from "react";
import { DotsThreeVertical } from "@phosphor-icons/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from "@nextui-org/react";
import ActionDropdown from "../DropdownActions";
const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];
const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "ROLE",
  },
  {
    key: "status",
    label: "STATUS",
  },
  {
    key: "action",
    label: "ACTION",
  }
];
const itemsDropdown = [
  {
    key: "new",
    label: "View Profile",
  },
  {
    key: "edit",
    label: "Edit Profile",
  },
  {
    key: "delete",
    label: "Delete Profile",
  }
];
const Tableameng=()=> {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };
  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <>
      <Table className="table-striped" aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody className="border" items={rows}>
          {(item) => (
            <TableRow key={item.key} >
              {(columnKey) => (
                <TableCell>
                  {columnKey === "action" ? (
                    // <button onClick={() => handleRowClick(item)}>
                    //   <DotsThreeVertical size={24} />
                    // </button>
                    <ActionDropdown/>
                    // <Dropdown className=" bg-gray-100 p-3 rounded-lg">
                    //   <DropdownTrigger>
                    //     <Button>
                    //       <DotsThreeVertical size={24} />
                    //     </Button>
                    //   </DropdownTrigger>
                    //   <DropdownMenu aria-label="Dynamic Actions" items={itemsDropdown}>
                    //     {(item) => (
                    //       <DropdownItem
                    //         key={item.key}
                    //         color={item.key === "delete" ? "danger" : "default"}
                    //         className={`pt-2 ${item.key === "delete" ? "text-red-500" : ""}`}
                    //       >
                    //         {item.label}
                    //       </DropdownItem>
                    //     )}
                    //   </DropdownMenu>
                    // </Dropdown>
                  ) : (
                    getKeyValue(item, columnKey)
                  )}
                </TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      </>
      // {selectedUser && (
      //   <div style={{ marginTop: '20px' }}>
      //     <h2>Profile Details</h2>
      //     <p><strong>Name:</strong> {selectedUser.name}</p>
      //     <p><strong>Role:</strong> {selectedUser.role}</p>
      //     <p><strong>Status:</strong> {selectedUser.status}</p>
      //   </div>
      // )}
  );
}
export default Tableameng



