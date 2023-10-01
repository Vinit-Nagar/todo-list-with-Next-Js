"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
    console.log(mainTask);
  };
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };
  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between p-5 w-2/3">
            <h4 className="text-2xl font-bold ">{t.title}</h4>
            <h5 className="text-xl font-semibold ">{t.desc}</h5>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 text-white px-4 py-2 rounded font-bold"
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl text-center font-bold">
        My Todo List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="m-8 border-zinc-700 border-4 px-4 py-2"
          placeholder="Enter Title Here..."
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="m-8 border-zinc-700 border-4 px-4 py-2"
          placeholder="Enter Description Of Task..."
          type="text"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white text-2xl m-8 font-bold rounded px-4 py-2">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-5 bg-slate-400">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
