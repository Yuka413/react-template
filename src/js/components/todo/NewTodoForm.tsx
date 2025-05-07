import * as React from "react";
import { TextField } from "../parts/TextField";
import { Dispatch, SetStateAction, useState } from "react";
import { Todo } from "./type";
import { Button } from "../parts/Button";

// App.tsxで定義しているsetTodoListを受け取れるようにしないとエラーが出るので、Propsを追加
type Props = {
  addTodo: (newTask: string, newPerson: string, newDeadline: string) => void
};

export const NewTodoForm = ({ addTodo }: Props) => {
  const [newTask, setNewTask] = useState<string>("");
  const [newPerson, setNewPerson] = useState<string>("");
  const [newDeadline, setNewDeadline] = useState<string>("");

	// 追加ボタンを押した時の関数
  const addNewTodo = () => {
    addTodo(newTask, newPerson, newDeadline);
    setNewTask("");
    setNewPerson("");
    setNewDeadline("");
  };

  return (
    <div className="flex justify-center gap-4">
      <TextField
        // idを指定すると、ラベルをクリックするとフォームにフォーカスが当たるようになる。
        id="new-task"
        label="タスク名"
        type="text"
        value={newTask}
        onChange={setNewTask}
      />
      <TextField
        id="new-person"
        label="担当者名"
        type="text"
        value={newPerson}
        onChange={setNewPerson}
      />
      <TextField
        id="new-deadline"
        label="締切"
        type="date"
        value={newDeadline}
        onChange={setNewDeadline}
      />
      <Button color="blue" onClick={addNewTodo}>
        追加
      </Button>
    </div>
  );
};

