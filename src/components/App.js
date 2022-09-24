import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [tasks, setTasks] = React.useState(TASKS);
	const handleDeleteTasks = (task) => {
		console.log(task);
		let newTasks = tasks.filter((t) => t.text !== task);
		setTasks(newTasks);
	};
	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter />
			<NewTaskForm />
			<TaskList tasks={tasks} handleDeleteTasks={handleDeleteTasks} />
		</div>
	);
}

export default App;
