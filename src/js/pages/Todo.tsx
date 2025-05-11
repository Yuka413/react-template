import * as React from "react";
import { Heading } from "../components/parts/Heading";
import { TodoTable } from "../components/todo/TodoList";
import { Button } from "../components/parts/Button";
import { NewTodoForm } from "../components/todo/NewTodoForm";
import { useAuth } from "../hook/use-auth";
import { useTodoList } from "../hook/use-todoList";
import { TextField } from "../components/parts/TextField";
import { useNavigate } from "../../../node_modules/react-router/dist/development/index";
import { useEffect } from "react";

export const Todo = () => {
  const { todoList, addTodo, deleteTodo, filterWord, setFilterWord } = useTodoList();
  const { logout, userName, isLoggedIn, isLoginCheckDone } = useAuth();
  const navigate = useNavigate();

//   ログアウト中にアクセスされたら、/loginに遷移させる。
    useEffect(() => {
        if(!isLoggedIn && isLoginCheckDone){
            navigate("/login");
        }
    }, [isLoggedIn, isLoginCheckDone])
    // 以下の条件分を入れておけば、/todoのページへの処理は行わない。これを入れておかないと一瞬見えてしまう
    if(!isLoggedIn) return null;

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
      <div className="mt-8 content-center">
        <Heading level={"h3"}>TODO一覧</Heading>
        <div className="mt-8 flex justify-center">
        <TextField
        id="filter-word"
        label="絞り込み"
        type="text"
        value={filterWord}
        onChange={setFilterWord}
      />
        </div>
        <TodoTable todoList={todoList} deleteTodo={deleteTodo} />
      </div>
    </main>
  );
};
