
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
  </Navbar>
  );
}
