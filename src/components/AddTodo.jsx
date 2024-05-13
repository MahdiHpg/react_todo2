const AddTodo = ({
  errorMsg,
  addTodo,
  setAddTodo,
  handleAddTodo,
  handleDeleteAllTodos,
}) => {
  return (
    <div className="addTodoList">
      <form className="input-group" autoComplete="off">
        <button className="btn btn-success" onClick={handleAddTodo}>
          اضافه کن
        </button>
        <input
          className="form-control"
          type="text"
          placeholder="حداقل 5 کاراکتر وارد نمایید"
          value={addTodo}
          onChange={(e) => setAddTodo(e.target.value)}
        />
        <button className="btn btn-danger" onClick={handleDeleteAllTodos}>
          حذف همه
        </button>
      </form>
      <div className="mt-3">
        <small className="text-warning">
          {errorMsg === true && "حداقل 5 کاراکتر وارد کن!"}
        </small>
      </div>
    </div>
  );
};
export default AddTodo;
