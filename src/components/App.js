import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
	const [tasks, setTasks] = React.useState(TASKS);
	const [category, setCategory] = React.useState(CATEGORIES);
	const [newTask, setNewTask] = React.useState("");
	const handleDeleteTasks = (task) => {
		let newTasks = tasks.filter((t) => t.text !== task);
		setTasks(newTasks);
	};
	const handleFilterTasks = (category) => {
		if (category === "All") {
			setTasks(TASKS);
		} else {
			let newTasks = TASKS.filter((t) => t.category === category);
			setTasks(newTasks);
		}
	};
	const handleAddTask = (newTask) => {
		setNewTask([...tasks, newTask]);
	};

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				category={category}
				handleFilterTasks={handleFilterTasks}
			/>
			<NewTaskForm newTask={newTask} handleAddTask={handleAddTask} />
			<TaskList tasks={tasks} handleDeleteTasks={handleDeleteTasks} />
		</div>
	);
}

export default App;
