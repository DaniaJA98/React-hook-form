import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem('todos')) {
            setTodos(JSON.parse(localStorage.getItem('todos')))
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todo) => {
        setTodos((old) => [...old, todo]);
    };

    const deleteTodo = (id) => {
        setTodos((old) => old.filter(item => item.id !== id))
    }

    const editarTodo = (id) => {
        const editarTodos = todos.map((item) => (
            item.id === id ? { ...item, estado: !item.estado } : item
        ))
        setTodos(editarTodos)

    }

    return (
        <>
            <Formulario addTodo={addTodo} />

            <ul className="list-group list-group-numbered mt-2">
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        deleteTodo={deleteTodo}
                        editarTodo={editarTodo} />
                ))}
            </ul>
        </>
    );
};

export default TodoList;