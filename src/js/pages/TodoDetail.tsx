import * as React from "react"
import { useParams } from "../../../node_modules/react-router/dist/development/index"
import { useTodoList } from "../hook/use-todoList";
import { TodoItem } from "../components/todo/TodoItem";
import { Notfound } from "./NotFound";
import { useAuth } from "../hook/use-auth";
import { Login } from "./Login";


export const TodoDetail = () => {
    let { id } = useParams();
    const { todoList } = useTodoList();
    const { isLoggedIn } = useAuth();

    const todo = todoList.find(todo => todo.id === id);

    if(!todo || !isLoggedIn) return <Notfound />
    return(
        <div>
            <div>{todo?.id}</div>
            <div>{todo?.task}</div>
            <div>{todo?.person}</div>
            <div>{todo?.deadline}</div>
        </div>
    )
}