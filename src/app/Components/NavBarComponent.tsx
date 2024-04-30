
"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import image from '../Assets/image.png'
import otherImage from '../Assets/image (2).png'

export function NavBarComponent() {
  return (
    <Navbar fluid rounded className="gradient h-20 d-flex justify-content-between align-items-center">
    <Navbar.Brand>
      <img src={image.src} className="ml-3 h-16" alt="Flowbite React Logo" />
    </Navbar.Brand>     
      <div className="flex md:order-2">
        <Dropdown
        className="w-28"
          arrowIcon={false}
          label={
            <Avatar alt="User settings" img={otherImage.src} className="h-16 w-16" rounded />
          }
        >
          <Dropdown.Item className="flex w-28 p-2 hammer justify-center" >PROFILE</Dropdown.Item>
          <Dropdown.Item className="flex w-28 py-2 hammer justify-center" >CREATE BOARD</Dropdown.Item>
          <Dropdown.Item className="flex w-28 p-2 hammer justify-center" >LOG OUT</Dropdown.Item>
        </Dropdown>
      </div>
  </Navbar>
  );
}
