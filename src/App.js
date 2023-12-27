import React from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./Header/Header";
import { useState } from "react";
import SecondHeader from "./SecondHeader/SecondHeader";

export default function App() {
  const filters = ["All", "Active", "Complete"];
  const [filter, setFilter] = useState(filters[0]);
  return (
    <>
      {/* <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      /> */}
      <SecondHeader />
      <TodoList filter={filter} />
    </>
  );
}
