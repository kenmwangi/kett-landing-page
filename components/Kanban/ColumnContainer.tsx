import { Column, Id } from "@/types";
import React from "react";
import TrashIcon from "../utils/Icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: Id) => void;
}

export default function ColumnContainer({
  column,
  deleteColumn,
}: ColumnContainerProps) {
  const { setNodeRef, attributes, listeners, transform, transition } =
    useSortable({
      id: column.id,
      data: {
        type: "Column",
        column,
      },
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-slate-600 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <header
        {...attributes}
        {...listeners}
        className="flex items-center justify-between bg-slate-700 text-lg h-[60px] cursor-pointer rounded-md rounded-b-none p-3 font-bold border-slate-600 border-4"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-slate-600 px-2 py-1 text-sm">
            0
          </div>
          {column.title}
        </div>
        <button
          onClick={() => deleteColumn(column.id)}
          className="stroke-gray-500 hover:stroke-white hover:bg-slate-600 rounded-full px-1.5 py-1.5"
        >
          <TrashIcon />
        </button>
      </header>
      <main className="flex flex-grow">Content</main>
      <footer>footer</footer>
    </div>
  );
}
