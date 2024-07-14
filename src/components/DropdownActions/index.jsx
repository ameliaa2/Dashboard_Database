import React from "react";
import { useRouter } from "next/navigation";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { DotsThreeVertical } from "@phosphor-icons/react";
export default function ActionDropdown({iduser}) {
  // const [selectedValue, setSelectedValue] = useState(null)
  const router = useRouter()
  const handleAction = (key) => {
    if (key === "view") {
      router.push('/profile/asdasdf'); // Ganti '/profile' dengan rute yang sesuai
    } else if (key === "edit") {
      // Tambahkan logika untuk tindakan lain jika diperlukan
    } else if (key === "delete") {
      // Tambahkan logika untuk tindakan lain jika diperlukan
    }
  };
  const items = [
    {
      key: "new",
      href: "/profile/dasfasdf",
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

  return (
    // <Dropdown className=" bg-gray-100 p-3 rounded-lg">
    //   <DropdownTrigger>
    //     <Button>
    //         <DotsThreeVertical size={24}/>
    //     </Button>
    //   </DropdownTrigger>
    //   <DropdownMenu aria-label="Dynamic Actions" items={items} onAction={(item)=>handleAction(item.key)}>
    //     {(item) => (
    //       <DropdownItem 
    //       key={item.key}
    //       color={item.key === "delete" ? "danger" : "default"}
    //       className={`pt-2 ${item.key === "delete" ? "text-red-500" : ""}`}
    //       >
    //         {item.label}
    //       </DropdownItem>
    //     )}
    //   </DropdownMenu>
    // </Dropdown>
    <Dropdown className=" bg-gray-100 p-3 rounded-lg">
      <DropdownTrigger>
        <Button variant="bordered">
          <DotsThreeVertical size={24} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Link Actions">
        <DropdownItem key="profile" href={`/profile/${iduser}`}>
          View Profile
        </DropdownItem>
        <DropdownItem className="pt-2" key="update" href="/update">
          Update Profile
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
