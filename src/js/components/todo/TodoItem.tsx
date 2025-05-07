import * as React from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";
import { Dispatch, FC, SetStateAction } from "react";

// TodoItemPropsという型を定義し、taskとdeadlineプロパティが文字列型であることを示す。
type Props = {
  id: number;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: number) => void;
};
// TodoItemコンポーネントはこれらのプロパティを受け取り、それらを表示する。
export const TodoItem = ({ id, task, person, deadline, deleteTodo }: Props) => {
  return (
    <li className="grid grid-cols-4 mt-1">
      <div>{task}</div>
      <div>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button color="red" onClick={() => deleteTodo(id)}>
          削除
        </Button>
      </div>
    </li>
  );
};
