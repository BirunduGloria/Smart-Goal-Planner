import React from "react";

function GoalCard({ goal, onEdit, onDelete }) {
  const { id, name, description, targetAmount, savedAmount } = goal;

  const remaining = targetAmount - savedAmount;
  const percentage = Math.min((savedAmount / targetAmount) * 100, 100); 

  return (
    <div className="goal-card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Target:</strong> KES {targetAmount.toLocaleString()}</p>
      <p><strong>Saved:</strong> KES {savedAmount.toLocaleString()}</p>
      <p><strong>Remaining:</strong> KES {remaining.toLocaleString()}</p>

  
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        >
          {Math.floor(percentage)}%
        </div>
      </div>

      <button onClick={() => onEdit(goal)}>Edit</button>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

export default GoalCard;
