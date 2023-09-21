import React, { useState } from 'react'

const StringArea = ({ text, max }) => {

    const [showFull, setShowFull] = useState(false);
    let shortText = text;

    if (text.length > max && !showFull) {
        shortText = text.slice(0, max) + "...Daha Fazla";
    }

    return (
        <p onClick={() => setShowFull(!showFull)}>{
            shortText.split("\n").map((line,index) =>
                <span key={index}>
                    {line}
                    <br />
                </span>
            )}



        </p>
    )
}

export default StringArea
