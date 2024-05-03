'use client'
import { useEffect, useState } from 'react';
import { Card } from "flowbite-react";
import { NavBarComponent } from "../Components/NavBarComponent";
import { ModalCreate } from "../Components/ModalCreate";
import ModalComment from "../Components/ModalComment";

import { fetchTasks } from '@/utils/DataService';

const Boardpage = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openModalComment, setOpenModalComment] = useState(false);
    const [tasks, setTasks] = useState([]); // State to store tasks

    useEffect(() => {
        fetchTasks().then(setTasks).catch(console.error); // Fetch tasks on component mount
    }, []);

    return (
        <div>
            <NavBarComponent />
            <div className="flex min-h-screen flex-col md:p-24 p-6 bg-green-50">
           
                <div className="flex flex-col items-center mb-10">
                    <div className="container mx-auto p-4 bg-green-200 max-w-screen-xl">
                        <div className="flex flex-wrap justify-around">
                            {tasks.map((task) => (
                                <Card key={task.id} className="max-w-sm bg-white p-4 m-2 cursor-pointer" onClick={() => setOpenModalComment(true)}>
                                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {task.taskName}
                                    </h5>
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {task.description}
                                    </p>
                                    <div className="flex justify-between">
                                        <h2 className="text-lg font-semibold">Priority {task.priority}</h2>
                                        <div className="w-12 h-12 bg-red-500 rounded-full"></div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boardpage;
