import React from "react"

function Filter({ onChangeGreased, onChangeName, onChangeWeight }) {
	return (
		<div className = "filterWrapper">
            <h3 className="smallHeader">Filter Hogs</h3>
			<p className="hoggyText ">Greased?</p>
            <select onChange={onChangeGreased}>
                <option value="All">All</option>
                <option value="Yes">Yes</option>
            </select>
            <p className="hoggyText">Sort By</p>
            <select onChange={onChangeName}>
                <option value="Name">Name</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
            <select onChange={onChangeWeight}>
                <option value="Weight">Weight</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>
		</div>
	)
}

export default Filter
