import React from 'react'

/**
 * Template for pages containing only text, auch as about me
 * @param {*contains pagename} props 
 */
const TextOnly = ( props ) => {
    return (
        <div className={props.className}>
            <h2>
                {props.classTitle}
            </h2>
            <img src={props.img} alt={"Joshua Baroni Headshot"} style={{width: "60%"}}/>
            <p>
                {props.body}
            </p>
        </div>
    )
};

export default TextOnly;