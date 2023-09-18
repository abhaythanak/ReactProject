import React, { useState, useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const getLocalItems = ()=>{
    const storedData = localStorage.getItem("todoData");
    if (storedData) {
       return JSON.parse(localStorage.getItem("todoData"));
    }else{
        return[];
    }
  }

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [add, setAdd] = useState(getLocalItems());
  const [editIndex, setEditIndex] = useState(-1);
  const [error, setError] = useState("");

  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(add));
  }, [add]);

  const addItem = (e) => {
    e.preventDefault();
    if (!title || !description) {
      setError("Please enter both title and description");
    } else if (editIndex === -1) {
      setAdd([...add, { title, description }]);
      setTitle("");
      setDescription("");
    } else {
      const updatedList = [...add];
      updatedList[editIndex] = { title, description };
      setAdd(updatedList);
      setEditIndex(-1);
      setTitle("");
      setDescription("");
    }
  };

  const closeError = () => {
    setError("");
  };

  const deletebtn = (id) => {
    const updatedList = add.filter((_, ind) => ind !== id);
    setAdd(updatedList);
  };

  const editbtn = (id) => {
    const { title, description } = add[id];
    setTitle(title);
    setDescription(description);
    setEditIndex(id);
  };

  const AllRemove = () => {
    setAdd([]);
  };
return (
    <>
      <div className="main">
        <div className="child bg-white p-6 rounded shadow-md">
          <figure className="mb-4">
            <img
              src="https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={"100px"}
              height={"100px"}
              alt="logo"
              className="w-16 h-16 object-cover rounded-full"
            />
            <figcaption className="text-center">Add your List here</figcaption>
          </figure>
          <form onSubmit={addItem}>
            <div className="addItem mb-4">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                className="border rounded px-2 py-1 w-full"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
                className="border rounded px-2 py-1 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                {editIndex === -1 ? "Add" : "Update"}
              </button>
            </div>
          </form>
          <div className="show">
            {add.map((item, ind) => {
              return (
                <div className="eachItem border rounded px-4 py-2 mb-2" key={ind}>
                  <h3>Title: <span>{item.title}</span> </h3>
                  <p>Description: <span>{item.description}</span> </p>
                  <button
                    onClick={() => editbtn(ind)}
                    className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletebtn(ind)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </div>
          <div className="show">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              data-sm-link-text="Remove All"
              onClick={AllRemove}
            >
              Remove All
            </button>
          </div>
        </div>
      </div>
      {error && (
        <ErrorMessage message={error} onClose={closeError} />
      )}
    </>
  );
}  