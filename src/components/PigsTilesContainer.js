import React from "react";
import Tiles from "./Tiles";

function PigsTilesContainer({ hogs }) {
    return(
    <div className = "ui grid container">
        {hogs.map((hog) => 
            <Tiles hog={hog} key={hog.name}/>
        )}
    </div>
    )
}

export default PigsTilesContainer