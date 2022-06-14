import React, { useState } from "react"
import HogDetails from "./HogDetails"
import { Card, Header, Icon } from "semantic-ui-react"

function Tiles({ hog }) {
	const [isClicked, setIsClicked] = useState(false)
	const [isHidden, setIsHidden] = useState(false)

	function onClickTile() {
		setIsClicked(!isClicked)
	}

	function hideClicked() {
		setIsHidden(!isHidden)
	}

	return (
		<>
			<Card color="pink">
				{isHidden ? (
					<Icon
						name="eye"
						size="big"
						link
						onClick={hideClicked}
					/>
				) : (
					<>
						<img src={hog.image} alt="hog" onClick={onClickTile} />
						<div className="content">
							<Header as="h1" color="blue">
								{hog.name}
							</Header>
						</div>
						{isClicked ? (
							<Card.Content>
								<HogDetails hog={hog} />
							</Card.Content>
						) : null}
						<Icon
							disabled
							name="eye slash"
							size="big"
							link
							onClick={hideClicked}
						/>
					</>
				)}
			</Card>
		</>
	)
}

export default Tiles
