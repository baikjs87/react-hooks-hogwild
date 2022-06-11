import React, { useState } from "react"
import HogDetails from "./HogDetails"

function Tiles({ hog }) {
	const [isClicked, setIsClicked] = useState(false)
	function onClickTile(e) {
		setIsClicked((isClicked) => !isClicked)
	}

	return (
		<div className="ui eight wide column card" onClick={onClickTile}>
			<a className="image">
				<img src={hog.image} />
			</a>
			<div className="content">
				<a className="largeHeader">
					<h1>{hog.name}</h1>
				</a>
			</div>
			<div className={isClicked ? "showDetails" : "hideDetails"}>
				<HogDetails hog={hog} />
			</div>
		</div>
	)
}

export default Tiles
