import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");
  const selectedGoal = goals.find((g) => String(g.id) === goalId);


  console.log("Goal ID from select:", goalId);             // e.g. "2"
console.log("Goals list:", goals);                       // entire goals array
console.log("Parsed Goal ID:", Number(goalId));          // e.g. 2

  function handleSubmit(e) {
    e.preventDefault();

    const goalIdNum = Number(goalId);
    if (!goalIdNum || !amount) {
      alert("Please select a valid goal and enter an amount.");
      return;
    }

    const selectedGoal = goals.find((g) => g.id === goalIdNum);
    if (!selectedGoal) {
      alert("Goal not found.");
      return;
    }

    const newSavedAmount = Number(selectedGoal.savedAmount) + Number(amount);

    fetch(`http://localhost:3000/goals/${selectedGoal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ savedAmount: newSavedAmount })
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        onDeposit(updatedGoal);
        setAmount("");
        setGoalId("");
      })
      .catch((err) => {
        console.error("Deposit failed:", err);
        alert("Something went wrong. Try again.");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="deposit-form">
      <h2>Make a Deposit</h2>

      <label htmlFor="goal">Select Goal:</label>
      <select
        id="goal"
        value={goalId}
        onChange={(e) => setGoalId(e.target.value)}
        required
      >
        <option value="">-- Choose a Goal --</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="1"
        required
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
