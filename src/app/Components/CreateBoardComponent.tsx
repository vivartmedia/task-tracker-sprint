
import { Button, Modal, TextInput } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import addbtn from '../Assets/image (4).png'

export function CreateBoardComponent() {
  const [openModal, setOpenModal] = useState(false);

  const onCloseModal = () => {
    setOpenModal(false);
  }

  const router = useRouter();

  const handleSubmit = () => {
  router.push('/Boardpage')
  }

  return (
    <>
      {/* <button className="text-black bg-transparent text-4xl font-thin  items-center " onClick={() => setOpenModal(true)}>+</button> */}
      <img src={addbtn.src} alt="create board btn" height={30} width={30} onClick={() => setOpenModal(true)} className="cursor-pointer" />
      <Modal  dismissible className="text-black bg-transparent backdrop-blur-sm"  show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header className="border-none p-0 "></Modal.Header>
        <Modal.Body className="border-black justify-center text-center " >
          <div className="flex justify-center items-center">
            <div className="text-center mr-6 pr-12 border-r-2 border-dashed border-black">
              <p className="text-black font-bold text-2xl mb-4">
                Enter Code
              </p>
              <TextInput className="w-full borderSolid text-[#3177FF] holtwood rounded-lg mb-4 " id="password1" type="text" required />
              <div className="flex justify-center">
                <Button className="bg-[#0B7D61] text-white" color="white" onClick={() => setOpenModal(false)}>
                  JOIN
                </Button>
              </div>
            </div>
            <div className="text-center ml-6">
              <p className="text-black font-bold text-2xl mb-4">
                Create New
              </p>
              <TextInput className="w-full borderSolid rounded-lg mb-4 holtwood" id="password2" type="text" placeholder="Name Board" required />
              <div className="flex justify-center">
                <Button className="bg-[#0B7D61] text-white" color="white" onClick={handleSubmit}>
                  CREATE
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


