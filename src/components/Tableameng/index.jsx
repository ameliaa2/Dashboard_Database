"use client"
import React, { useState, useEffect } from "react";
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
// const rows = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     role: "CEO",
//     status: "Active",
//   },
//   {
//     key: "2",
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     status: "Paused",
//   },
//   {
//     key: "3",
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     status: "Active",
//   },
//   {
//     key: "4",
//     name: "William Howard",
//     role: "Community Manager",
//     status: "Vacation",
//   },
// ];
const columns = [
  {
    key: "iduser",
    label: "IDUSER"
  },
  {
    key: "name",
    label: "NAMA"
  },
  {
    key: "departemen",
    label: "DEPARTEMEN"
  },
  {
    key: "team",
    label: "TEAM"
  },
  {
    key: 'license',
    label: 'LICENSE'
  },
  {
    key: 'category',
    label: 'CATEGORY'
  },
  {
    key: 'level',
    label: 'LEVEL'
  },
  {
    key: 'status',
    label: 'STATUS'
  },
  {
    key: 'issueddate',
    label: 'ISSUED DATE'
  },
  {
    key: 'expireddate',
    label: 'EXPIRED DATE'
  },
  {
    key: "action",
    label: "ACTION",
  }
];
const Tableameng = ({ data }) => {
  const rows = data
  console.log('ini rows ', rows)
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRowClick = (user) => {
    setSelectedUser(user);
  };
  useEffect(() => {
    console.log(selectedUser)
  }, [selectedUser])

  return (
    <>
      <Table isStriped aria-label="Example table with dynamic content">
        <TableHeader columns={columns}>
          {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        <TableBody className="border" items={rows}>
          {(item) => (
            <TableRow key={item.iduser} >
              {(columnKey) => (
                <TableCell>
                  {columnKey === "action" ? (
                    <ActionDropdown iduser={item.iduser}/>
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



