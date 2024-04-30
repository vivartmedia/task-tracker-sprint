
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
    {/* <Dropdown>
        <Dropdown.Toggle as={Avatar} src={otherImage.src} className="mr-2" />
        <Dropdown.Menu>
          <Dropdown.Item>Action 1</Dropdown.Item>
          <Dropdown.Item>Action 2</Dropdown.Item>
          <Dropdown.Item>Action 3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
  </Navbar>
  );
}
