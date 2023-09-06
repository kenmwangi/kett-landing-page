"use client";
import { Column, Id } from "@/types";
import React, { useState } from "react";
import TrashIcon from "../utils/Icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface ColumnContainerProps {
  column: Column;
  deleteColumn: (id: Id) => void;
  updateColumn: (id: Id, title: string) => void;
}

export default function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
}: ColumnContainerProps) {
  const [editMode, setEditMode] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="bg-slate-600 opacity-60 border border-rose-500 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
      ></div>
    );
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-slate-600 w-[350px] h-[500px] max-h-[500px] rounded-md flex flex-col"
    >
      <header
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="flex items-center justify-between bg-slate-700 text-lg h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-slate-600 border-4"
      >
        <div className="flex gap-2">
          <div className="flex justify-center items-center bg-slate-600 px-2 py-1 text-sm rounded-full">
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
              className="bg-black focus:border-rose-500 border rounded outline-none px-2"
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
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
