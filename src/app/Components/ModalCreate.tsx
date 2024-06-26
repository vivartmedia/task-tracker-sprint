
"use client";

import { Button, Modal, Dropdown } from "flowbite-react";
import { useState } from "react";

export function ModalCreate() {
  const [openModal, setOpenModal] = useState(false);
  const [todoselectedItem, settodoSelectedItem] = useState('To-Do')
  const [priorityselectedItem, setprioritySelectedItem] = useState('Priority - 5')

  return (
    <>
      <h1 className="text-5xl font-thin cursor-pointer" onClick={() => setOpenModal(true)}>+</h1>
      <div className="flex justify-between">
        <Modal size='6xl' show={openModal} onClose={() => setOpenModal(false)} >

          <Modal.Header>
            <h1 className="text-3xl">Test Login</h1>
          </Modal.Header>

          <div className="flex justify-between pb-12 px-9 space-x-4">
            <div className="w-2/3 ">
              <h1 className="text-2xl pb-2">Description</h1>
              <p className="bg-green-50 p-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequatur dolorem nemo nobis similique eaque quo quos ullam laborum laudantium. Quia odit quo optio, vero at voluptatum quibusdam qui perspiciatis?</p>
            </div>

            <div id="assignee" className="w-1/3 bg-gray-100 p-4 flex flex-col space-y-4">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl" >Assignee:</h1>
                  <h1 id="username" className="text-2xl">username</h1>
                </div>
                <div>
                  <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                </div>
              </div>
              <div className="flex">
                <h1 className="text-2xl">Created 12/31/2024</h1>
                <h1 id="datecreated"></h1>
              </div>
              <div className="w-60">
                <Dropdown className="w-60" label={todoselectedItem}>
                  <Dropdown.Item>To-Do</Dropdown.Item>
                  <Dropdown.Item>In Progress</Dropdown.Item>
                  <Dropdown.Item>Completed</Dropdown.Item>
                  <Dropdown.Item>Add another category</Dropdown.Item>
                </Dropdown>
              </div>
              <div className="w-60">
                <Dropdown className="w-60" label={priorityselectedItem}>
                  <Dropdown.Item>Priority - 5</Dropdown.Item>
                  <Dropdown.Item>Priority - 4</Dropdown.Item>
                  <Dropdown.Item>Priority - 3</Dropdown.Item>
                  <Dropdown.Item>Priority - 2</Dropdown.Item>
                  <Dropdown.Item>Priority - 1</Dropdown.Item>
                </Dropdown>
              </div>
            </div>


          </div>




          <Modal.Body>
            <div className="space-y-6">

            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-center space-x-6">
          <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpenModal(false)}>Create</Button>
           
          </Modal.Footer>


        </Modal>
      </div>
    </>
  );
}
