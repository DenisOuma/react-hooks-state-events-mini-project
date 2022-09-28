import React from "react";
import Task from "./Task";
function TaskList({ tasks, handleDeleteTasks }) {
	return (
		<div className="tasks">
			{/* display a list of tasks using Task component */}
			{tasks.map((task) => (
				<Task
					key={task.text}
					text={task.text}
					handleDeleteTasks={handleDeleteTasks}
					category={task.category}
				/>
			))}
		</div>
	);
}

export default TaskList;
