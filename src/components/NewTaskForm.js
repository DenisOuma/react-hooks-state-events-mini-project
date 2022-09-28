import React from "react";

function NewTaskForm({ onTaskFormSubmit, categories: categoryList }) {
	const [category, setCategory] = React.useState("");
	const [details, setDetails] = React.useState("");
	// let categoryListItem = categoryList.shift();
	const newCats = () => {
		let newCat = [...categoryList];
		newCat.shift();
		return newCat;
	};

	return (
		<form
			className="new-task-form"
			onSubmit={(e) => {
				e.preventDefault();
				if (details === "" || category === "") {
					alert("Please fill out all fields");
				} else {
					onTaskFormSubmit({ text: details, category });
					setDetails("");
					setCategory("");
				}
			}}
		>
			<label>
				Details
				<input
					type="text"
					name="text"
					value={details}
					onChange={(e) => setDetails(e.target.value)}
				/>
			</label>
			<label>
				Category
				<select
					name="category"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				>
					{/* render <option> elements for each category here */}
					{newCats().map((c) => (
						<option key={c}>{c}</option>
					))}
				</select>
			</label>
			<input type="submit" value="Add task" />
		</form>
	);
}

export default NewTaskForm;
