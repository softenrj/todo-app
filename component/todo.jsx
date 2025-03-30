import React from 'react';
import List from './list';
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlicer';

const Todo = () => {
    const todo = useSelector(state => state.todo);

    const dispatch = useDispatch();

    const HandleRemove = (key) => {
        dispatch(removeTodo(key));
    }

    return (
        <div className='bg-white text-gray-700
         md:max-h-[28rem] md:min-h-20
         min-h-20
        overflow-x-auto custom-scrollbar'>
            {
                todo.map(({_id,content}) => (
                    <List con={content} key={_id} remove = {() => HandleRemove(_id)} />
                ))
            }
        </div>
    );
}

export default Todo;
