import { createContext, useState } from "react";

export const ListContext = createContext();
export const ListProvider = (props) => {
  const [userData, setuserData] = useState(JSON.parse(localStorage.getItem("data")) || []);
  return (
    <ListContext.Provider value={[userData, setuserData]}>
      {props.children}
    </ListContext.Provider>
  );
};
