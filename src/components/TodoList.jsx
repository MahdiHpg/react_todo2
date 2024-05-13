import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { useEffect } from "react";

// قبل رندر شدن کامپوننت
const getTodosFromLocalStorage = () => {
  const exist = localStorage.getItem("TODO2_mahdiHpg");
  if (exist) {
    return JSON.parse(exist);
  } else {
    return [];
  }
};

const TodoList = () => {
  const [addTodo, setAddTodo] = useState("");
  const [error, setError] = useState(false);
  const [allTodos, setAllTodos] = useState(getTodosFromLocalStorage());

  // اضافه کردن تسک جدید
  const handleAddTodo = (e) => {
    e.preventDefault();

    if (addTodo.length < 4) {
      setError(true);
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: addTodo,
      done: false,
    };
    setAllTodos([...allTodos, newTodo]);
    setError(false);
    setAddTodo("");
  };

  // حذف همه داده ها
  const handleDeleteAllTodos = (e) => {
    e.preventDefault();

    if (window.confirm("واقعا میخوای همه‌ را پاک کنی؟!")) {
      setAllTodos([]);
    } else {
      return;
    }
  };

  // حذف یکی از تسک ها
  const handleDeleteATodo = (todoId) => {
    if (window.confirm("واقعا حذف بشه؟؟!!")) {
      // برگشت همه داده ها بجز مورد حذف
      const getAllTodosExceptThis = allTodos.filter(
        (item) => item.id !== todoId
      );
      setAllTodos(getAllTodosExceptThis);
    } else {
      return;
    }
  };

  // تبدیل به تسک انجام شده
  const handleDoneTodo = (todoId) => {
    // گرفتن index تسک
    const getIndexOfThis = allTodos.findIndex((item) => item.id === todoId);
    let copyAllTodos = [...allTodos];

    // تغییر داده موردنظر بر اساس پوزیشن
    copyAllTodos[getIndexOfThis] = {
      id: allTodos[getIndexOfThis].id,
      title: allTodos[getIndexOfThis].title,
      done: !allTodos[getIndexOfThis].done,
    };

    setAllTodos(copyAllTodos);
    // console.log(allTodos);
  };

  useEffect(() => {
    localStorage.setItem("TODO2_mahdiHpg", JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <div className="todoListsStyles">
      <h5>لیست کارهایی که باید انجام دهم</h5>
      <div className="card my-5">
        <div className="card-header">
          <AddTodo
            errorMsg={error}
            addTodo={addTodo}
            setAddTodo={setAddTodo}
            handleAddTodo={handleAddTodo}
            handleDeleteAllTodos={handleDeleteAllTodos}
          />
        </div>
        <div className="card-body">
          <TodoItem
            allTodos={allTodos}
            handleDoneTodo={handleDoneTodo}
            handleDeleteATodo={handleDeleteATodo}
          />
        </div>
      </div>
    </div>
  );
};
export default TodoList;
