"use client";
import React, { useState } from "react";
import PlusIcon from "../utils/Icons/PlusIcon";
import { v4 as uuidv4 } from "uuid";
import { Column } from "@/types";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);

  console.log(columns);

  function generateId() {
    // return Math.floor(Math.random() * 1000);
    return uuidv4();
  }
  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }
  return (
    <section
      className="
    m-auto 
    flex 
    min-h-screen 
    w-full 
    items-center 
    overflow-x-auto 
    overflow-y-hidden 
    px-[40px]"
    >
      <div className="m-auto flex gap-2">
        <div className="flex gap-2">
          {columns.map((column) => {
            return (
              <div key={column.id} className="text-white">
                {column.title}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            createNewColumn();
          }}
          className="
      h-[60px]
      w-[350px]
      min-w-[350px]
      cursor-pointer
      rounded-lg
      bg-slate-700
      text-white
      border-2
      border-slate-900
      ring-rose-400
      hover:ring-2
      p-4
      flex
      gap-2
      "
        >
          <PlusIcon />
          Add Column
        </button>
      </div>
    </section>
  );
}
