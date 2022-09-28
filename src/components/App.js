import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
	const [tasks, setTasks] = React.useState(TASKS);

	const handleDeleteTasks = (task) => {
		let newTasks = tasks.filter((t) => t.text !== task);
		setTasks(newTasks);
	};
	const handleFilterTasks = (CATEGORIES) => {
		if (CATEGORIES === "All") {
			setTasks(TASKS);
		} else {
			let newTasks = TASKS.filter((t) => t.category === CATEGORIES);
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
				categories={CATEGORIES}
				handleFilterTasks={handleFilterTasks}
			/>
			<NewTaskForm
				categories={CATEGORIES}
				onTaskFormSubmit={onTaskFormSubmit}
			/>
			<TaskList tasks={tasks} handleDeleteTasks={handleDeleteTasks} />
		</div>
	);
}

export default App;
