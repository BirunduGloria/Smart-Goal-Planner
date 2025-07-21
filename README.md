# Smart Goal Planner

A **React-based financial goal tracking app** that helps users create, manage, and track their savings goals. Developed as part of the **Moringa School Phase 2 Week-2 Code Challenge**, this project demonstrates mastery of React concepts like **state, props, and controlled components**, along with **RESTful API integration** using JSON Server.

---

## Live Demo

🌐 [Click here to view the live app]((https://test-app-090.onrender.com))


##Features

# Goal Management
- Create new financial goals with:
  - `Title`
  - `Description`
  - `Target Amount`
  - `Category`
  - `Deadline`
- Edit and update goals
- Delete goals

#Deposit Tracking
- Make deposits toward a selected goal
- Automatically update the saved amount in real-time
- Form validation to ensure proper inputs

#Progress Monitoring
- Visual progress bars for each goal
- Displays saved vs. target amount
- Shows remaining balance

#Smart Goal Overview (Dashboard)
- Total number of goals
- Total amount saved
- Count of completed goals
- Time remaining until each goal's deadline
- Alerts and warnings:
  - If a deadline is within 30 days
  - If a deadline is overdue and goal is incomplete



## Tech Stack

| Frontend  | Backend      | Styling    |
|-----------|--------------|------------|
| React     | JSON Server  | Custom CSS |



## Folder Structure

smart-goal-planner/
├── public/
├── src/
│ ├── components/
│ │ ├── GoalCard.js
│ │ ├── GoalForm.js
│ │ ├── GoalList.js
│ │ ├── GoalOverview.js
│ │ └── DepositForm.js
│ ├── App.js
│ └── index.js
├── db.json
├── package.json
└── README.md

yaml
Copy
Edit



##  Key Functionality

| Action           | Function Signature          |
|------------------|-----------------------------|
| Add a goal       | `onAddGoal(goalData)`       |
| Edit a goal      | `onEditGoal(goalData)`      |
| Delete a goal    | `onDeleteGoal(goalId)`      |
| Make a deposit   | `onDeposit(updatedGoal)`    |



##  Getting Started Locally

### 1. Clone the Repo

```bash
git clone https://github.com/BirunduGloria/smart-goal-planner.git
cd smart-goal-planner
2. Install Dependencies
bash
Copy
Edit
npm install
3. Setup JSON Server
Ensure db.json exists with:

json
Copy
Edit
{
  "goals": []
}
Then run:

bash
Copy
Edit
npx json-server --watch db.json --port 3001
 The app fetches data from http://localhost:3001/goals

4. Start the React App
bash
Copy
Edit
npm start
App will run at: http://localhost:3000

 Author
Gloria Birundu
 Student at Moringa School

License
This project is licensed under the MIT License.
For educational use only.
