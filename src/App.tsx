import { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./models";
import DisplayTodos from "./components/DisplayTodos";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobies: string[];
let roleNumber: [string, number];

type Person = {
  name: string;
  email: string;
  age?: number;
};

let person1: Person = {
  name: "Verygood",
  email: "verygoodmuhirwa2@gmail.com",
};

// this is to declare the array to accept many objects
let lotsOfPeople: Person[];

type Teacher = {
  name: string;
  age?: number;
};

interface Guy extends Teacher {
  profession: string;
}

let newGuy: Guy = {
  profession: "A doctor in web 3",
  name: "Professor Awet Fesseha",
};

type Student = Teacher & {
  subjects: string;
  marks: number;
};

let student1: Student = {
  name: "Verygood Muhirwa",
  marks: 12,
  subjects: "Mathematics",
  age: 12,
};

let printName: (name: string) => void = (name) => {
  // console.log(name);
  // throw new Error("This function willl not return any value")
};
let unknownName: unknown;

function App() {
  printName("Verygood Muhirwa");
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<boolean>(false);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editTodoId, setEditTodoId] = useState<number | null>(null);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleDelete = (id: number) => {
    const updatedTodos = todos.filter((data) => data.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleted = (id: number) => {
    setTodos(
      todos.map((data) =>
        data.id === id ? { ...data, isCompleted: !data.isCompleted } : data
      )
    );
  };

  const handleEditButtonClick = (id: number) => {
    setEditTodo(!editTodo);
    setEditTodoId(id);
  };

  const handleSubmitNewTodo = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((data) => (data.id === id ? { ...data, todo: newTodo } : data))
    );
    setNewTodo("");
    setEditTodoId(null)
  };

  return (
    <div className="bg-blue-400 h-screen">
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <DisplayTodos
        todos={todos}
        handleDelete={handleDelete}
        editTodoId={editTodoId}
        setEditTodoId={setEditTodoId}
        handleCompleted={handleCompleted}
        editTodo={editTodo}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        handleSubmitNewTodo={handleSubmitNewTodo}
        handleEditButtonClick={handleEditButtonClick}
      />
    </div>
  );
}

export default App;
