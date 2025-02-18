import React from "react";
import classNames from "classnames";
import { CollaboratorPin } from "front/todolist/CollaboratorPin";
import { ShareButton } from "front/todolist/ShareButton";
import { useCollaborators } from "front/todolist/state";

export type CollaboratorsProps = {
  todoListId: string;
  canShare: boolean;
  className?: string;
};

export const Collaborators = ({
  todoListId,
  canShare,
  className,
}: CollaboratorsProps) => {
  const collaborators = useCollaborators();

  return (
    <ul className={classNames("flex space-x-2", className)}>
      {collaborators.map((collaborator) => (
        <li key={collaborator.id}>
          <CollaboratorPin label={collaborator.email}>
            {collaborator.shortName}
          </CollaboratorPin>
        </li>
      ))}

      {canShare && (
        <li>
          <ShareButton todoListId={todoListId} />
        </li>
      )}
    </ul>
  );
};
