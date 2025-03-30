import { createSlice,nanoid } from "@reduxjs/toolkit";

const savedtodo = localStorage.getItem('todos');

const initialState = (savedtodo) ? JSON.parse(savedtodo) : []

export const todoSlicer = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (st,ac) => {
            st.push({_id: nanoid() , content: ac.payload});
            localStorage.setItem('todos',JSON.stringify(st));
        },
        removeTodo: (st,ac) => {
            const updateTodo = st.filter((todo) => todo._id !== ac.payload );
            localStorage.setItem('todos',JSON.stringify(updateTodo));
            return updateTodo
        }

    }
})

export const {addTodo,removeTodo} = todoSlicer.actions;
export default todoSlicer.reducer