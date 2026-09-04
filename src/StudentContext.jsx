import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [student] = useState({
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    course: "B.Tech Computer Science"
  });

  return (
    <StudentContext.Provider value={{ student }}>
      {children}
    </StudentContext.Provider>
  );
}

export function useStudent() {
  return useContext(StudentContext);
}
