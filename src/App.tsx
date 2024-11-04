import React from "react";
import { useState } from "react";

interface Todos {
  id: number;
  task: string;
  completed: boolean;
}

export default function MyApp() {
  // todosを管理するためのstateを定義
  const [todos, setTodos] = useState<Todos[]>([]);
  // idを管理するためのstateを定義
  const [id, setId] =useState<number>(0);
  // 入力されたtaskを管理するためのstateを定義
  const [task, setTask] = useState<string>("");
  // 追加ボタンを押したときの挙動を定義
  const onClickAdd = () => {
    // id をインクリメント
    setId(id + 1);
    const newTodos: Todos = {
      id: id,
      task,
      completed: false,
    }
    // 新しいtodoを追加
    setTodos([...todos, newTodos])
    // 入力フィールドをクリア
    setTask("");
  }

  return (
    <div>
      <h1>Todoリスト</h1>
      <input
        type="text"
        name="task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="タスクを入力してください"
      />
      {/* onclickの{}にボタンを押したときの挙動を定義した関数を指定する */}
      <button onClick={onClickAdd}>追加</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}