import React from "react";

function GoalOverview({ goals }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + Number(g.savedAmount), 0);
  const completedGoals = goals.filter((g) => Number(g.savedAmount) >= Number(g.targetAmount)).length;

  function getTimeLeft(deadline) {
    const today = new Date();
    const dueDate = new Date(deadline);
    const diff = dueDate - today;

    const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return daysLeft;
  }

  return (
    <div className="overview">
      <h2>Goal Overview</h2>
      <p><strong>Total Goals:</strong> {totalGoals}</p>
      <p><strong>Total Saved:</strong> KES {totalSaved.toLocaleString()}</p>
      <p><strong>Goals Completed:</strong> {completedGoals}</p>

      <h3>Goal Deadlines</h3>
      <ul>
        {goals.map((goal) => {
          const timeLeft = getTimeLeft(goal.deadline);
          const isComplete = Number(goal.savedAmount) >= Number(goal.targetAmount);

          let status = "";
          if (isComplete) {
            status = "Complete";
          } else if (timeLeft < 0) {
            status = " Overdue!";
          } else if (timeLeft <= 30) {
            status = `${timeLeft} days left`;
          } else {
            status = `${timeLeft} days left`;
          }

          return (
            <li key={goal.id}>
              <strong>{goal.name}:</strong> {status}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GoalOverview;
