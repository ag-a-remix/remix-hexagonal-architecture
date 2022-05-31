import type {
  TodoListCollaboratorDto,
  TodoListDetailsDto,
} from "shared/client";

import React from "react";
import { displayDate } from "front/Date";
import { AddTodoForm } from "front/todolist/AddTodoForm";
import { Collaborators } from "front/todolist/Collaborators";
import { TodoListEditableTitle } from "front/todolist/TodoListEditableTitle";

export type TodoListHeaderProps = {
  todoList: TodoListDetailsDto;
  collaborators: TodoListCollaboratorDto[];
};

export const TodoListHeader = ({
  todoList,
  collaborators,
}: TodoListHeaderProps) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between sm:space-x-4">
        <TodoListEditableTitle todoList={todoList} />
        <Collaborators
          className="mt-2 sm:mt-0"
          todoListId={todoList.id}
          collaborators={collaborators}
        />
      </div>

      <p className="pl-3 text-xs">
        ↳ Created {displayDate(todoList.createdAt)}
      </p>

      <AddTodoForm />
    </div>
  );
};
