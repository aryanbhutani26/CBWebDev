import axios from "axios";
import React, { useEffect, useState } from "react";
const Home = () => {
  // async function getAlltodos(){

  // }
  const handleSubmit = (e) => {
    // e.preventDefault();
  const payload = {
    title,
    description,}
    console.log(title, description);
    const res = axios.post("http://localhost:5000/createtodo", payload)
  };
  const [title, settitle] = useState();
  const [description, setDescription] = useState();

  const handleChangeTit = (e) => {
    settitle(e.target.value);
    console.log(title);
  };
  const handleChangeDes = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const [alltodos, setalltodos] = useState();
  const getAllTodos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/alltodos");
      console.log(res);
      setalltodos(res.data.todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);
  return (
    <div className="bg-black text-white h-screen flex justify-center items-center">
      {/* <h1>Home Page</h1> */}
      <div className="flex flex-col gap-5">
        {/* {alltodos &&
          alltodos.map((todo) => (
            <div
              key={todo._id}
              className="bg-green-500 p-3 rounded-lg hover:bg-green-600"
            >
              <h1 className="text-2xl">{todo.title}</h1>
              <p>{todo.description}</p>
            </div>
          ))} */}
        {/* <Form /> */}

        {alltodos &&
          alltodos.map((todo) => {
            return (
              <>
                <h1 key={todo._id} className="text-2xl">
                  {/* {todo.id} */}
                  {todo.title}
                </h1>
                <p>{todo.description}</p>
              </>
            );
          })}
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 items-center justify-center h-50 bg-gray-900 text-white"
          >
            <input
              onChange={handleChangeTit}
              type="text"
              placeholder="Title"
              className="border-1 p-1 rounded"
            />
            <input
              onChange={handleChangeDes}
              type="text"
              placeholder="Description"
              className="border-1 p-1 rounded"
            />
            <button className="bg-green-500 p-1 px-3 rounded">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
