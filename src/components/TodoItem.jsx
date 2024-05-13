const TodoItem = ({ allTodos, handleDeleteATodo, handleDoneTodo }) => {
  return (
    <div className="listItemStyles">
      <ul>
        {allTodos.length > 0 ? (
          allTodos.map((item, index) => (
            <li key={item.id} className={` ${!item.done ? "" : "bg-success "}`}>
              <div className="itemClass">
                <p className="itemTitle">
                  <span>{index + 1} </span> {" .  "}{" "}
                  {!item.done ? `${item.title}` : <del>{item.title}</del>}
                </p>
                <div className="todoOptions">
                  <button
                    className={`btn ${
                      !item.done ? "btn-info" : "btn-warning "
                    }`}
                    onClick={() => handleDoneTodo(item.id)}
                  >
                    {!item.done ? "✔️" : "تامام"}
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteATodo(item.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div>
            <p>هنوز لیستی تعریف نشده است</p>
          </div>
        )}
      </ul>
    </div>
  );
};
export default TodoItem;
