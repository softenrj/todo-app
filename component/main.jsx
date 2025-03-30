import React, { useState } from "react";
import ViewHeadlineIcon from "@mui/icons-material/ViewHeadline";
import Todo from "./todo";
import TextArea from "./TextArea";


const Main = () => {
    const [textare, settextare] = useState(false);


    return (
        <div className="md:w-1/3 flex flex-col">
            <nav className="bg-[#AF7EEB] h-16 text-gray-50 flex w-full items-center p-3 gap-x-8 md:mb-6">
                <ViewHeadlineIcon className="text-white" />
                <h1 className="text-2xl font-bold">Simple To-Do List</h1>
            </nav>
                <Todo />
                {textare ? (
                    <TextArea done={() => settextare(!textare)} />
                ) : (
                    <div
                        className="bg-[#AF7EEB] rounded-4xl self-center relative bottom-3 cursor-pointer hover:bottom-4 transition-all delay-75 duration-200 ease-in-out"
                        onClick={() => settextare(!textare)}
                    >
                        <p className="text-xl font-semibold text-gray-100 text-nowrap p-4">
                            + NEW TASK
                        </p>
                    </div>
                )}
        </div>
    );
};

export default Main;
