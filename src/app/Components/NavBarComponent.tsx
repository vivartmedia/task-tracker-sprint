
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import image from '../Assets/image.png'
import otherImage from '../Assets/image (2).png'
import logout from '../Assets/image (3).png'
import { useRouter } from "next/navigation";

export function NavBarComponent() {

    const router = useRouter();

  return (
    <Navbar fluid rounded className="gradient h-24 d-flex justify-content-between align-items-center">
    <Navbar.Brand>
      <img src={image.src} className="ml-3 h-20 pb-3" alt="Flowbite React Logo" />
    </Navbar.Brand>     
      <div className="flex md:order-2 border-none">
        <Dropdown
        className="w-36 borderSolid bg-transparant"
          arrowIcon={false}
          label={
            <Avatar alt="Nav Bar Options" img={otherImage.src} className="h-16 w-16  bg-none" rounded />
          }
        >
          <Dropdown.Item  onClick={() => router.push('/Profile')} className="flex w-36 text-black p-2 hammer justify-center" >PROFILE</Dropdown.Item>
          <Dropdown.Item  onClick={() => router.push('/Boardpage')}  className="flex w-36 text-[#0B7D61] py-2 hammer justify-center" >CREATE BOARD</Dropdown.Item>
          <div className="flex mb-2 mx-auto " >
          <Dropdown.Item  onClick={() => router.push('/')}  className="flex w-36 text-[#CD0000] p-2 hammer justify-center items-center my-auto" >LOG OUT
          <img src={logout.src} alt="Logout png" className="w-6 items-center my-auto pb-3" />
          </Dropdown.Item>
          </div>
        </Dropdown>
      </div>
=======
    <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      
>>>>>>> 4af35ab (cards)
  </Navbar>
  );
}
