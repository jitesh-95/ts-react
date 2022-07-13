import axios from "axios";
import { JSXElementConstructor, useState } from "react";
import { TodoItems } from "./Todos";

interface itemFunction {
  onClick: (id: number) => void;
  onChange: (id: number, status: boolean) => void;
  getTodos: () => void;
}

const TodosItem = ({
  title,
  status,
  id,
  onClick,
  onChange,
  getTodos,
}: TodoItems & itemFunction) => {
  const [value, setValue] = useState("");

  const handleDelete = () => {
    onClick(id);
  };

  const handleToggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange(id, e.target.checked);
  };

  const openDialog = () => {
    let myModal: any = document.querySelector(".myDialog");
    myModal.showModal();
    console.log(id);
  };

  const closeDialog = () => {
    let myModal: any = document.querySelector(".myDialog");
    myModal.close();
    console.log(id);

    // axios
    //   .patch(`http://localhost:8080/todos/${id}`, { title: value })
    //   .then(getTodos);
    setValue("");
  };

  const cancelDialog = () => {
    let myModal: any = document.querySelector(".myDialog");
    myModal.close();
  };

  return (
    <div>
      <input type="checkbox" onChange={handleToggle} />
      <span>{`${title}-${status}`}</span>
      <button onClick={handleDelete}>X</button>
      <button onClick={openDialog}>Edit</button>
      <dialog
        className="myDialog"
        style={{ height: 200, width: 300, border: "1px solid black" }}
      >
        <h3>Edit your Todo</h3>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <br />
        <br />
        <button onClick={closeDialog}>UPDATE</button>
        <button onClick={cancelDialog}>Cancel</button>
      </dialog>
    </div>
  );
};

export default TodosItem;
