import React, { useState, useEffect } from "react";

function GoalForm({ onAddGoal, editingGoal, onUpdateGoal }) {
  const initialFormState = {
    name: "",
    description: "",
    targetAmount: "",
    savedAmount: "",
    category: "",
    deadline: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    if (editingGoal) {
      setFormData(editingGoal);
    }
  }, [editingGoal]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGoal = {
      name: formData.name,
      description: formData.description,
      category: formData.category,
      targetAmount: parseFloat(formData.targetAmount),
      savedAmount: parseFloat(formData.savedAmount),
      deadline: formData.deadline,
    };

    fetch("https://test-app-090.onrender.com/goals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGoal),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to save goal");
        }
        return res.json();
      })
      .then((data) => {
        onAddGoal(data);
        setFormData(initialFormState);
      })
      .catch((err) => {
        console.error("Error submitting goal:", err);
        alert("Failed to save goal. Please check if the server is running or if the URL is correct.");
      });
  }

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <h2>{editingGoal ? "Edit Goal" : "Add New Goal"}</h2>

      <label>Goal Name:</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label>Target Amount (KES):</label>
      <input
        type="number"
        name="targetAmount"
        value={formData.targetAmount}
        onChange={handleChange}
        required
      />

      <label>Saved Amount (KES):</label>
      <input
        type="number"
        name="savedAmount"
        value={formData.savedAmount}
        onChange={handleChange}
        required
      />

      <label>Category:</label>
      <select name="category" value={formData.category} onChange={handleChange} required>
        <option value="">-- Select --</option>
        <option value="Savings">Savings</option>
        <option value="Emergency Fund">Emergency Fund</option>
        <option value="Education">Education</option>
        <option value="Investment">Investment</option>
        <option value="Travel">Travel</option>
      </select>

      <label>Deadline:</label>
      <input
        type="date"
        name="deadline"
        value={formData.deadline}
        onChange={handleChange}
        required
      />

      <button type="submit">
        {editingGoal ? "Update Goal" : "Add Goal"}
      </button>
    </form>
  );
}

export default GoalForm;
