import React from "react";
import TableList from "../Component/TableList";
import useFilter from "../hooks/useFilter";

const Name = () => {
  const data = useFilter("name");
  return <TableList students={data} />;
};

export default Name;
