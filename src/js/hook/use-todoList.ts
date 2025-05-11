import { useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../types/todo";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [filterWord, setFilterWord] = useState<string>("");

  // マウント時に、一度だけLocalStorageからtodo一覧のデータを取得する
  useEffect(() => {
    const todoListData = localStorage.getItem("todo-list");
    if (todoListData) {
      setTodoList(JSON.parse(todoListData));
    }
  }, []);


  const addTodo = (newTask: string, newPerson: string, newDeadline: string) => {
    const updateTodoList = [
      ...todoList,
      {
				// もともとid:number型で使用していたが、id:stringにしたので、Date.nowの値をstring型にする
        id: Date.now().toString(),
        task: newTask,
        person: newPerson,
        deadline: newDeadline,
      },
    ];
		localStorage.setItem("todo-list", JSON.stringify(updateTodoList))
    setTodoList(updateTodoList);
  };

  const deleteTodo =
    (id: string) =>
			{
				const updateTodoList = todoList.filter((todo) => todo.id !== id)
				localStorage.setItem("todo-list", JSON.stringify(updateTodoList));
				setTodoList(updateTodoList);
			}


  const filterTodoList = useMemo(
    () =>
      todoList.filter(
        (todo) =>
          todo.task.includes(filterWord) || todo.person.includes(filterWord),
      ),
    [filterWord, todoList],
  );

  return {
    todoList: filterTodoList,
    setTodoList,
    addTodo,
    deleteTodo,
    filterWord,
    setFilterWord,
  };
};
