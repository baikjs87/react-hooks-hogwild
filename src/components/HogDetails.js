import React from "react"

function HogDetails({ hog }) {
	return (
		<div>
			<h4 className="hoggyText">Specialty</h4>
			<p className="">{hog.specialty}</p>
			<h4 className="hoggyText">Weight</h4>
			<p>{hog.weight} lbs</p>
			<h4 className="hoggyText">Greased</h4>
			<p>{hog.greased.toString()}</p>
			<h4 className="hoggyText">Highest Medal Achieved</h4>
			<p>{hog["highest medal achieved"]}</p>
		</div>
	)
}

export default HogDetails
