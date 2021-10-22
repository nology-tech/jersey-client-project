import React from 'react'

import "./NetworkPageButton.scss"

const NetworkPageButton = (props) => {

    const {index, setPages, pages} = props;

    let className;

    if(pages === index - 1) {
        className = "network-alerts__pages-buttons-button network__button-active"
    } else {
        className = "network-alerts__pages-buttons-button"
    }
    

    return (
        <button className={className} onClick={() => setPages(index - 1)}>{index}</button>
    )
}

export default NetworkPageButton
