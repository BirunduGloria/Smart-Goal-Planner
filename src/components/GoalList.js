import React from "react";
import GoalCard from "./GoalCard";

function GoalList({ goals, onUpdate, onDelete }) {
  return (
    <div className="goal-list">
      {goals.map((goal) => (
        <GoalCard
          key={goal.id}
          goal={goal}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default GoalList;
