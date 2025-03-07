import React from 'react';
import List from './list';
import { todoContext } from './main';

const Todo = () => {
    const { todos , settodos } = React.useContext(todoContext)

    const HandleRemove = (key) => {
        settodos(todos.filter((item,i) => i !== key));
    }

    return (
        <div className='bg-white text-gray-700
         md:max-h-[28rem] md:min-h-20
         min-h-20
        overflow-x-auto custom-scrollbar'>
            {
                todos.map((con,i) => (
                    <List con={con} key={i} remove = {() => HandleRemove(i)} />
                ))
            }
        </div>
    );
}

export default Todo;
