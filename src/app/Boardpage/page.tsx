"use client";

import { Card, Button, Label, TextInput, Modal, FileInput, Dropdown, Accordion, ListGroup, } from "flowbite-react";


import React from 'react'
import { NavBarComponent } from "../Components/NavBarComponent";


const Boardpage = () => {


    return (
        <>
            <NavBarComponent />

            <div className="flex min-h-screen flex-col p-24  bg-green-50">
                <div className="flex items-center">
                    <h1 className="text-3xl p-12 font-semibold">OUR BOARD</h1>
                    <div className="flex items-center " >
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <div className="w-12 h-12 bg-pink-400 rounded-full mr-4"></div>
                        <h1 className="text-6xl font-thin">+</h1>
                    </div>

                </div>


                <div className="flex flex-col items-center mb-10">

                <div className="container mx-auto p-4 bg-green-200 max-w-screen-xl" style={{ maxWidth: '90%' }}>
    <h1 className="pb-4 text-2xl font-semibold">To-Do +</h1>
    <div className="flex justify-around pb-4 overflow-x-auto space-x-4">
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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

                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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

 
                    <div className="container mx-auto p-4  m-10  bg-green-300	max-w-screen-xl" style={{maxWidth: '90%'}}>
                        <h1 className="pb-4 text-2xl font-semibold">In Progress</h1>
                        <div className="flex justify-around pb-4 overflow-x-auto space-x-4">
                            <Card href="#" className=" flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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


     

                    <div className="container mx-auto p-4  m-10  bg-green-400	max-w-screen-xl" style={{maxWidth: '90%'}}>
                        <h1 className="pb-4 text-2xl font-semibold">Completed</h1>
                        <div className="flex justify-around pb-4 overflow-x-auto space-x-4">

                      
                        <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
                            <Card href="#" className="flex-none max-w-sm bg-white p-4 w-80">
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
        </>

    )
}

export default Boardpage
