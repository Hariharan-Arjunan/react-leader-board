import React from "react";
import useFilter from "../hooks/useFilter";
import TableList from "../Component/TableList";

const Rank = () => {
  const data = useFilter("rank");
  return <TableList students={data} />;
};

export default Rank;
