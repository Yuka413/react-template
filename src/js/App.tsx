import * as React from "react";
import { TodoList } from "./components/todo/TodoList";
import { Heading } from "./components/parts/Heading";
import { NewTodoForm } from "./components/todo/NewTodoForm";
import { useTodoList } from "./components/todo/use-todoList";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { TextField } from "./components/parts/TextField";
import { Button } from "./components/parts/Button";

export const App = () => {
  const {todoList, addTodo, deleteTodo} = useTodoList();
  const {isLoggedIn, setIsLoggedIn, userName, setUserName} = useContext(AuthContext);

  if(!isLoggedIn) {
    return(
      <main className="text-center pt-15">
        <Heading level={"h1"}>ログイン</Heading>
        <div className = "flex gap-2 justify-center pt-10">
        <TextField
        id="user-name"
        label="ユーザー名"
        type="text"
        value={userName}
        onChange={setUserName}
      />
        <Button color="blue" onClick={() => setIsLoggedIn(true)}>
          ログイン
        </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="text-center">
      <Heading level={"h1"}>TODO</Heading>
      <div>{userName}さん、こんにちは</div>
      <Button color="red" onClick={() => setIsLoggedIn(false)}>
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
        <TodoList todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
};
