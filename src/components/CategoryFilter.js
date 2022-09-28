import React from "react";

function CategoryFilter({ categories: category, handleFilterTasks }) {
	const [active, setActive] = React.useState("All");
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{category.map((cat) => (
				<button
					className={cat === active ? "selected" : ""}
					key={cat}
					onClick={() => {
						handleFilterTasks(cat);
						setActive(cat);
					}}
				>
					{cat}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;
