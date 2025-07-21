import React, { useState } from "react";

function DepositForm({ goals, onDeposit }) {
  const [selectedGoalId, setSelectedGoalId] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const goalId = parseInt(selectedGoalId); // Convert to number
    const goal = goals.find((g) => g.id === goalId);

    if (!goal) {
      alert("Please select a valid goal.");
      return;
    }

    const depositAmount = parseFloat(amount);
    if (isNaN(depositAmount) || depositAmount <= 0) {
      alert("Please enter a valid deposit amount.");
      return;
    }

    const updatedSavedAmount = goal.savedAmount + depositAmount;

    fetch(`http://localhost:3001/goals/${goal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ savedAmount: updatedSavedAmount })
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        onDeposit(updatedGoal);
        setAmount("");
        setSelectedGoalId("");
      })
      .catch((error) => {
        alert("Deposit failed. Try again.");
        console.error("Deposit error:", error);
      });
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <h3>Make a Deposit</h3>

      <select
        value={selectedGoalId}
        onChange={(e) => setSelectedGoalId(e.target.value)}
        required
      >
        <option value="">-- Select Goal --</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>

      <input
        type="number"
        placeholder="Deposit Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        min="1"
        step="any"
        required
      />

      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
