"use client";

import { useState } from 'react';
import { Card } from "flowbite-react";
import { NavBarComponent } from "../Components/NavBarComponent";
import { ModalCreate } from "../Components/ModalCreate";
import ModalComment from "../Components/ModalComment";

const Boardpage = () => {
    const [openModal, setOpenModal] = useState(false); // For ModalCreate, initially set to false
    const [openModalComment, setOpenModalComment] = useState(false); // For ModalComment, initially set to false
    const [accountColor, setaccountColor] = useState("#57CDFF");

    return (
        <div>
            <NavBarComponent accountColor={accountColor} />


            <div className="flex min-h-screen flex-col md:p-24 p-6  bg-green-50">
                <div className="flex md:flex-row flex-col md:items-center pb-4">
                    <h1 className="text-3xl md:p-12 font-semibold">OUR BOARD</h1>
                    <div className="flex items-center " >
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <h1 onClick={() => setOpenModal(true)} className="text-6xl font-thin">+</h1>
                    </div>
                </div>



                <div className="flex flex-col items-center mb-10">

                    <div className="container mx-auto p-4 bg-green-200 max-w-screen-xl" style={{ maxWidth: '90%' }}>
                        <div className="flex items-center align-middle">
                            <h1 className="pt-1 text-2xl font-semibold">To-Do </h1>
                            {/* <h1 className="text-5xl font-thin">+</h1> */}
                            <ModalCreate />
                        </div>
                        <div className="flex items-center space-y-4 md:space-y-0 md:flex-row flex-col align-middle md:justify-around md:pb-4 overflow-x-auto overflow-y-scroll max-h-96 md:space-x-4 ">
                            <div>
                                <Card className="flex-none max-w-sm bg-white p-4 md:w-80 cursor-pointer" onClick={() => setOpenModalComment(true)}>
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold">Priority -2</h2>
                                        <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                    </div>
                                </Card>
                                <ModalComment openModal={openModalComment} setOpenModal={setOpenModalComment} />
                            </div>



                            <Card className="flex-none max-w-sm bg-white p-4 md:w-80 cursor-pointer" onClick={() => {
                                console.log('Card clicked'); // This should appear in the console when you click the card
                                setOpenModal(true);
                            }}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                </div>
                            </Card>
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                                </div>
                            </Card>
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                                </div>
                            </Card>

                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                                </div>
                            </Card>

                        </div>

                    </div>

                    {/* <div className="container mx-auto p-4 bg-green-200 max-w-screen-xl" style={{ maxWidth: '90%' }}> */}
                    <div className="container mx-auto p-4  m-10  bg-green-300	max-w-screen-xl" style={{ maxWidth: '90%' }}>
                        <h1 className="pb-4 text-2xl font-semibold">In Progress</h1>
                        <div className="flex items-center space-y-4 md:space-y-0 md:flex-row flex-col align-middle md:justify-around md:pb-4 md:overflow-x-auto overflow-y-scroll max-h-96 md:space-x-4 ">

                            <Card href="#" className=" flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                </div>
                            </Card>
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                </div>
                            </Card>
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                                </div>
                            </Card>
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Test login
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    A short description of the task you are viewing....
                                </p>
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold	">Priority -2</h2>
                                    <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                                </div>
                            </Card>

                        </div>

                    </div>



                   



                        <div className="container mx-auto p-4  m-10  bg-green-400	max-w-screen-xl" style={{ maxWidth: '90%' }}>
                            <h1 className="pb-4 text-2xl font-semibold">Completed</h1>
                            <div className="flex items-center space-y-4 md:space-y-0 md:flex-row flex-col align-middle md:justify-around md:pb-4 md:overflow-x-auto overflow-y-scroll max-h-96 md:space-x-4 ">



                                <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold	">Priority -2</h2>
                                        <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                    </div>
                                </Card>
                                <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold	">Priority -2</h2>
                                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                                    </div>
                                </Card>
                                <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold	">Priority -2</h2>
                                        <div className="w-12 h-12 bg-blue-400 rounded-full"></div>
                                    </div>
                                </Card>
                                <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold	">Priority -2</h2>
                                        <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                                    </div>
                                </Card>
                                <Card href="#" className="flex-none max-w-sm bg-white p-4 md:w-80">
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Test login
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        A short description of the task you are viewing....
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold	">Priority -2</h2>
                                        <div className="w-12 h-12 bg-pink-400 rounded-full"></div>
                                    </div>
                                </Card>
                            </div>


                        


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boardpage
