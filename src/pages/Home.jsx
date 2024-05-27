import React from "react";
import TableList from "../Component/TableList";
import useFilter from "../hooks/useFilter";

const Home = () => {
  const data = useFilter();
  return <TableList students={data} />;
};

export default Home;
