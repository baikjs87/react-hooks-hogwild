import React from "react"
import Tiles from "./Tiles"
import { Card } from "semantic-ui-react"

function PigsTilesContainer({ hogs, greased, sort }) {
	const greasedHogs = greased ? hogs.filter((hog) => hog.greased) : [...hogs]
	const sortedHogs =
		sort === ""
			? greasedHogs
			: sort === "Name"
			? greasedHogs.sort(function (a, b) {
					return a.name < b.name ? -1 : a.name > b.name ? 1 : 0
			  })
			: greasedHogs.sort(function (a, b) {
					return b.weight - a.weight
			  })
	return (
		<Card.Group itemsPerRow={3}>
			{sortedHogs.map((hog) => (
				<Tiles hog={hog} key={hog.name} />
			))}
		</Card.Group>
	)
}

export default PigsTilesContainer
