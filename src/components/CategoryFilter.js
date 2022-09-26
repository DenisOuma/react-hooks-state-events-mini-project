import React from "react";

function CategoryFilter({ category, handleFilterTasks }) {
	return (
		<div className="categories">
			<h5>Category filters</h5>
			{/* render <button> elements for each category here */}
			{category.map((cat) => (
				<button key={cat} onClick={() => handleFilterTasks(cat)}>
					{cat}
				</button>
			))}
		</div>
	);
}

export default CategoryFilter;
