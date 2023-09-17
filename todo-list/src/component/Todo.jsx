import React, { useState, useEffect } from "react";


const getLocalItems = ()=>{
    const storedData = localStorage.getItem("todoData");
    if (storedData) {
       return JSON.parse(localStorage.getItem("todoData"));
    }else{
        return[]
    }
  }

export default function Todo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [add, setAdd] = useState(getLocalItems());
  const [editIndex, setEditIndex] = useState(-1);

  // Load data from localStorage when the component mounts
//   useEffect(() => {
//     const storedData = localStorage.getItem("todoData");
//     if (storedData) {
//       setAdd(JSON.parse(storedData));
//     }
//   }, []);

  // Save data to localStorage whenever 'add' changes
  useEffect(() => {
    localStorage.setItem("todoData", JSON.stringify(add));
  }, [add]);

  const addItem = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please enter both title and description");
    } else if (editIndex === -1) {
      setAdd([...add, { title, description }]);
    } else {
      const updatedList = [...add];
      updatedList[editIndex] = { title, description };
      setAdd(updatedList);
      setEditIndex(-1);
    }
    setTitle("");
    setDescription("");
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
        <div className="child">
          <figure>
            <img
              src="https://images.pexels.com/photos/5797899/pexels-photo-5797899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              width={"100px"}
              height={"100px"}
              alt="logo"
            />
            <figcaption>Add your List here</figcaption>
          </figure>
          <form onSubmit={addItem}>
            <div className="addItem">
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
              />
              <button type="submit">
                {editIndex === -1 ? "Add" : "Update"}
              </button>
            </div>
          </form>
          <div className="show">
            {add.map((item, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button onClick={() => editbtn(ind)}>Edit</button>
                  <button onClick={() => deletebtn(ind)}>Delete</button>
                </div>
              );
            })}
          </div>
          <div className="show">
            <button className="" data-sm-link-text="Remove All" onClick={AllRemove}>
              <span>Remove All</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
