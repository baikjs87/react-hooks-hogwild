import React from "react"
import { Checkbox, Dropdown } from "semantic-ui-react"

function Filter({ onChangeGreased, onChangeSort }) {
	const options = [
		{ key: "name", text: "Name", value: "name" },
		{ key: "weight", text: "Weight", value: "weight" },
	]
	return (
		<div className="filterWrapper">
			<h3>Filter Hogs</h3>
			<Checkbox
				toggle
				label="Greased?"
				className="largeHeader filter"
				onClick={onChangeGreased}
			/>
			{/* <h4>Sort By:</h4> */}
			<Dropdown
				placeholder="Sort By"
				search
				selection
				options={options}
				onChange={onChangeSort}
			/>
		</div>
	)
}

export default Filter
