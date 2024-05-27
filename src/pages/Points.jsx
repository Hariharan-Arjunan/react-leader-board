import React from "react";
import TableList from "../Component/TableList";
import useFilter from "../hooks/useFilter";

const Points = () => {
  const data = useFilter("points");
  return <TableList students={data} />;
};

export default Points;
