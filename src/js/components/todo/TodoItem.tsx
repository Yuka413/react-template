import * as React from "react";
import { Button } from "../parts/Button";
import { useAuth } from "../../hook/use-auth";
import { memo } from "react";
import { Link } from "../../../../node_modules/react-router/dist/development/index";

// TodoItemPropsという型を定義し、taskとdeadlineプロパティが文字列型であることを示す。
type Props = {
  id: string;
  task: string;
  person: string;
  deadline: string;
  deleteTodo: (id: string) => void;
};
// TodoItemコンポーネントはこれらのプロパティを受け取り、それらを表示する。
export const TodoItem = memo(({ id, task, person, deadline, deleteTodo }: Props) => {
  const { userName } = useAuth();
  const style = userName === person ? "text-red-600 font-bold" : "";
  return (
    <li className="grid grid-cols-5 mt-1">
      <div>
        <Link to ={`/todo/${id}`}>{id}</Link>
      </div>
      <div>{task}</div>
      <div className={style}>{person}</div>
      <div>{deadline}</div>
      <div>
        <Button color="red" onClick={() => deleteTodo(id)}>
          削除
        </Button>
      </div>
    </li>
  );
});
