import React, { useState, useContext } from 'react';
import { todoContext } from './main';

const TextArea = ({done}) => {
    const { todos, settodos } = useContext(todoContext);
    const [text, setText] = useState("");

    const handleAddTodo = () => {
        if (text.trim() !== "") {
            settodos([...todos, text]);
            setText("");
            done();
        }
    };

    return (
        <div className="flex flex-col items-center p-4 bg-white">
            <textarea
                className="w-full md:w-3/4 h-24 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#AF7EEB] custom-scrollbar"
                placeholder="Write your to-do..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button 
                className="mt-3 bg-[#AF7EEB] text-white px-4 py-2 rounded-lg hover:bg-[#B791EB] transition-all"
                onClick={handleAddTodo}
            >
                Add To-Do
            </button>
        </div>
    );
};

export default TextArea;
