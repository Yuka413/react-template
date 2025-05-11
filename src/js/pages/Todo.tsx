import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { TodoList } from "../components/todo/TodoList";
import { Button } from "../components/parts/Button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { useAuth } from "../hook/use-auth";
import { useTodoList } from "../hook/use-todoList";
import { TextField } from "../components/parts/TextField";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { logout, userName } = useAuth();
  return (
    <main className="text-center">
      <Heading level={"h1"}>TODO</Heading>
      <div>{userName}さん、こんにちは</div>
      <Button color="red" onClick={logout}>
        ログアウト
      </Button>
      <div className="mt-8">
        <Heading level={"h2"}>新規TODO作成</Heading>
        <div className="mt-8">
          <NewTodoForm addTodo={addTodo} />
        </div>
      </div>
      <div className="mt-8">
        <Heading level={"h3"}>TODO一覧</Heading>
        <div className="mt-8">
        <TextField
        id="filter-word"
        label="絞り込み"
        type="text"
        value={filterWord}
        onChange={setFilterWord}
      />
        </div>
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
};
