import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { useTodoList } from "./components/todo/use-todoList";

export const App = () => {
  const {todoList, addTodo, deleteTodo} = useTodoList();

  return (
    <main className="text-center">
      <Heading level={"h1"}>TODO</Heading>
      <div className="mt-8">
        <Heading level={"h2"}>新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level={"h3"}>TODO一覧</Heading>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
};
