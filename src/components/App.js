import React, { useState } from "react"
import Nav from "./Nav"
import PigsTilesContainer from "./PigsTilesContainer"
import Filter from "./Filter"
import hogs from "../porkers_data"

function App() {
	const [greased, setGreased] = useState(false)
	const [sort, setSort] = useState("")

	function onChangeGreased() {
		setGreased(!greased)
	}

	function onChangeSort(e) {
		setSort(e.target.textContent)
	}

	return (
		<div className="App">
			<Nav />
			<Filter
				onChangeGreased={onChangeGreased}
				onChangeSort={onChangeSort}
			/>
			<PigsTilesContainer hogs={hogs} greased={greased} sort={sort} />
		</div>
	)
}

export default App
