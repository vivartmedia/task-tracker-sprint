"use client";

import { Avatar, Dropdown, Navbar } from "flowbite-react";
import image from '../Assets/image.png'

export function LoginNavComponent() {
    return (
      <Navbar fluid rounded className="gradient h-20">
        <Navbar.Brand>
          <img src={image.src} className="ml-3 h-16 items-center" alt="Flowbite React Logo" />
        </Navbar.Brand>       
      </Navbar>
    );
}
