import React from 'react'

/**
 * Template for pages containing only text, auch as about me
 * @param {*contains pagename} props 
 */
const BasicPage = ( props ) => {
    return (
        <div className={props.className}>
            <h2>
                {props.classTitle}
            </h2>
            <img src={props.img} style={{width: "60%"}}/>
            <p>
                {console.log(props.body)}
                {props.body}
            </p>
            {props.children}
        </div>
    )
};

export default BasicPage;