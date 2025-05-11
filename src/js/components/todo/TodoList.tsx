import * as React from "react";
import { TodoItem } from "./TodoItem";
import { Todo } from "../../types/todo";
import { Dispatch, SetStateAction } from "react";

type Props = {
  todoList: Todo[];
  deleteTodo: (id: number) => void;
};

export const TodoList = ({ todoList, deleteTodo }: Props) => {
  return (
    <ul className="bg-sky-500/50  mt-8 max-w-xl m-auto py-2">
      <li className="grid grid-cols-4 font-bold p-2 ">
        <div>タスク名</div>
        <div>担当者名</div>
        <div>締切</div>
        <div>削除</div>
      </li>
      {/* 追加ボタンを押した時にaddNewTodoが実行され、setTodoList関数が実行されることでtodoListに新しい配列が渡る。それをmapでそれぞれ取り出して表示している。 */}
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          task={todo.task}
          person={todo.person}
          deadline={todo.deadline}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};
