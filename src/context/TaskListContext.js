import React, { createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider = () => {
  return <div>Task list context</div>;
};

export default TaskListContextProvider;
