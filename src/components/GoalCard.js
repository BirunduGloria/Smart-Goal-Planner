import React from "react";


function GoalCard({ goal, onDelete, onEdit }) {
  const handleEditClick = () => {
    const newTitle = prompt("Edit goal name:", goal.name);
    const newDescription = prompt("Edit description:", goal.description);

    if (newTitle && newDescription) {
      const updatedGoal = {
        ...goal,
        name: newTitle,
        description: newDescription
      };
      onEdit(updatedGoal);
    }
  };

  const percentage = Math.min(
    (goal.savedAmount / goal.targetAmount) * 100,
    100
  ).toFixed(1);

  const remaining = Math.max(goal.targetAmount - goal.savedAmount, 0);

  return (
    <div className="goal-card">
      <h3>{goal.name}</h3>
      <p>{goal.description}</p>
      <p><strong>Target:</strong> KES {goal.targetAmount.toLocaleString()}</p>
      <p><strong>Saved:</strong> KES {goal.savedAmount.toLocaleString()}</p>
      <p><strong>Remaining:</strong> KES {remaining.toLocaleString()}</p>

      <div className="progress-bar">
        <div className="fill" style={{ width: `${percentage}%` }} />
      </div>
      <p><strong>Progress:</strong> {percentage}%</p>

      <button onClick={() => onDelete(goal.id)}>Delete</button>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default GoalCard;
