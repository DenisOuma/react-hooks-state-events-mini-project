import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
	const [tasks, setTasks] = React.useState(TASKS);
	const [category, setCategory] = React.useState(CATEGORIES);

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
	const onTaskFormSubmit = (newTask) => {
		setTasks([...tasks, newTask]);
	};

	return (
		<div className="App">
			<h2>My tasks</h2>
			<CategoryFilter
				category={category}
				handleFilterTasks={handleFilterTasks}
			/>
			<NewTaskForm category={category} onTaskFormSubmit={onTaskFormSubmit} />
			<TaskList tasks={tasks} handleDeleteTasks={handleDeleteTasks} />
		</div>
	);
}

export default App;
