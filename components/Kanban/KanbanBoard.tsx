"use client";
import React, { useMemo, useState } from "react";
import PlusIcon from "../utils/Icons/PlusIcon";
import { v4 as uuidv4 } from "uuid";
import { Column, Id } from "@/types";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";

export default function KanbanBoard() {
  const [columns, setColumns] = useState<Column[]>([]);
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);

  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  function generateId() {
    // return Math.floor(Math.random() * 1000);
    return uuidv4();
  }

  //   CREATE A COLUMN

  function createNewColumn() {
    const columnToAdd: Column = {
      id: generateId(),
      title: `Column ${columns.length + 1}`,
    };
    setColumns([...columns, columnToAdd]);
  }

  //   DELETE COLUMN
  function deleteColumn(id: Id) {
    const filteredColumn = columns.filter((col) => col.id !== id);
    setColumns(filteredColumn);
  }

  function onDragStart(event: DragStartEvent) {
    if (event.active.data.current?.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }
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
      <DndContext onDragStart={onDragStart}>
        <div className="m-auto flex gap-4">
          <div className="flex gap-4">
            <SortableContext items={columnsId}>
              {columns.map((column) => {
                return (
                  <div key={column.id} className="text-white">
                    <ColumnContainer
                      column={column}
                      deleteColumn={deleteColumn}
                    />
                  </div>
                );
              })}
            </SortableContext>
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
      </DndContext>
    </section>
  );
}
