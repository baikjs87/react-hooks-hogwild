import React from "react"

function HogDetails({ hog }) {
	return (
		<div>
			<h3 className="hoggyText">Specialty</h3>
			<p className="">{hog.specialty}</p>
			<h3 className="hoggyText">Weight</h3>
			<p>{hog.weight} lbs</p>
			<h3 className="hoggyText">Greased</h3>
			<p>{hog.greased.toString()}</p>
			<h3 className="hoggyText">Highest Medal Achieved</h3>
			<p>{hog["highest medal achieved"]}</p>
		</div>
	)
}

export default HogDetails
