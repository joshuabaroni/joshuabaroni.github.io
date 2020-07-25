import React, {Component} from 'react';
import classes from './EntryPoint.module.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from '../menu/Menu.js'
import BasicPage from '../pages/BasicPage.js'
import Headshot from '../img/ProfilePicBaroni2016.jpg'
import Resume from "../img/JoshBaroniResume2020-1.jpg"

const constants = {
    name: "Joshua Baroni",
    title: "FullStack Developer",
    sections: [
        "Home",
        "About Me",
        "My Resume",
        "Projects",
        "Contact Me"
    ]
}

const LinkButton = (props) => {
    console.log(props.href)
    return (
    <Router>
      <a href={props.href}>
        <button className={classes.LinkButton}>
            <strong>{props.name}</strong>
        </button>
      </a>
    </Router>
    )
}

(() => console.log(Resume))();

class EntryPoint extends Component {
    render() {
        return (
        <div id={constants.sections[0]} className={classes.Home}>
            <Menu sections={constants.sections}/>
            <h1>{constants.name}: {constants.title}</h1>
            <LinkButton name={"Github"} href="https://github.com/joshuabaroni" />
            <LinkButton name={"LinkedIn"} href="https://www.linkedin.com/in/joshua-baroni-b50580177/" />
            <LinkButton name={"Facebook"} href="https://www.facebook.com/profile.php?id=100020207475034" />
            <div id={constants.sections[1]} className={classes.BorderedDiv}>
                <BasicPage ignore={classes.Ignore/* todo needs formatting */}
                    classTitle={constants.sections[1]}
                    img={Headshot}
                    body={`Hi, my name is Josh Baroni and welcome to my website!
                    Graduating from CNU's Class of 2020 with a B.S. in Computer Science,
                    I am currently new to the industry and am finding what specific type
                    of data architecture and design I am most interested in pursuing. In the
                    meantime, feel free to check out some of the projects I've worked on over
                    the years.`}
                />
            </div>
            <div id={constants.sections[2]} className={classes.BorderedDiv}>
                <BasicPage
                    classTitle={`${constants.sections[2]}: Updated 2020`}
                    img={Resume /* TODO uses JPG instead of PDF embed */}
                    download={classes.Ignore /* TODO needs download link */}
                />
            </div>
            {/* TODO link project pages */}
            <div id={constants.sections[4]} className={classes.BorderedDiv}>
                <BasicPage
                    className={classes.Bottom}
                    classTitle={`${constants.sections[4]}`}
                    body="Email: joshua.baroni.16@cnu.edu
                    Cell: (571)-389-2922 (Text me unless it's urgent!)
                    Discord: HesAMusicMan#2934
                    Contact Hours: 9a-5p EST Mon-Sat"
                />
            </div>
        </div>
        )
    }
}

export default EntryPoint;