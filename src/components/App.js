import React, { useState } from "react"
import Nav from "./Nav"
import PigsTilesContainer from "./PigsTilesContainer"
import Filter from "./Filter"
import hogs from "../porkers_data"

function App() {
	const [newHogs, setNewHogs] = useState(hogs)

	function onChangeGreased(e){
		const filterGreasedHogs = e.target.value === "Yes" ?
		newHogs.filter((hog) => hog.greased != false) : newHogs
		setNewHogs(filterGreasedHogs)
	}

	function onChangeName(e){
		const alphabeticalHogs = e.target.value !== "None" ? newHogs.sort(function(a, b) {
			return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
		}) : newHogs
		console.log(alphabeticalHogs)
		setNewHogs(alphabeticalHogs)
	}

	function onChangeWeight(e){
		let sortable = []
		for (let hog in newHogs) {
			sortable.push(hog, newHogs[hog])
		}
		sortable.sort(function(a, b) { return a[1] - b[1]})
		setNewHogs(sortable)
	}

	return (
		<div className="App">
			<Nav />
			<Filter
				onChangeGreased={onChangeGreased}
				onChangeName={onChangeName}
				onChangeWeight={onChangeWeight}
			/>
			<PigsTilesContainer hogs={newHogs} />
		</div>
	)
}

export default App
