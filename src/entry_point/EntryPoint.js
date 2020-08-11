import React, {Component} from 'react';
import classes from './EntryPoint.module.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Menu from '../menu/Menu.js'
import BasicPage from '../pages/BasicPage.js'
import Headshot from '../img/ProfilePicBaroni2016.jpg'
import Resume from "../img/JoshBaroniResume2020-1.jpg"
import ProjectTemplate from "../pages/ProjectTemplate"

const webpage = {
    name: "Joshua Baroni",
    title: "FullStack Developer",
    sections: [
        "Home",
        "About Me",
        "My Resume",
        "Projects",
        "Contact Me"
    ],
    subpages: [
        () => {
            return (
                <div key={1} id={webpage.sections[1]} className={classes.BorderedDiv}>
                <BasicPage ignore={classes.Ignore/* todo needs formatting */}
                    className={classes.sixtyPercent}
                    classTitle={webpage.sections[1]}
                    img={Headshot}
                    body={`Hi, my name is Josh Baroni and welcome to my website!
                    Graduating from CNU's Class of 2020 with a B.S. in Computer Science,
                    I am currently new to the industry and am finding what specific type
                    of data architecture and design I am most interested in pursuing. In the
                    meantime, feel free to check out some of the projects I've worked on over
                    the years.`}
                />
            </div>)
        },
        () => {
            return (<div key={2} id={webpage.sections[2]} className={classes.BorderedDiv}>
                <BasicPage
                    classTitle={`${webpage.sections[2]}: Updated 2020`}
                    img={Resume /* TODO type out instead of screenshot */}
                >
                    <LinkButton name='JoshBaroniResume2020.PDF' href='https://docs.google.com/document/d/1XPGBCnOPeDbmYbU79OaEwSEDOC9kUKM1WLgZkvsJT4g/edit?usp=sharing'/>
                </BasicPage>
            </div>)
        },
        /* TODO link project pages */
        () => {
            return (
            <div key={3} id={webpage.sections[4]} className={classes.BorderedDiv}>
                <BasicPage
                    className={classes.Bottom}
                    classTitle={`${webpage.sections[4]}`}
                    body="Email: joshua.baroni.16@cnu.edu
                    Cell: (571)-389-2922 (Text me unless it's urgent!)
                    Discord: HesAMusicMan#2934
                    Contact Hours: 9a-5p EST Mon-Sat"
                />
            </div>
            )
        }
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
    state = { show: false }

    showNaiveBayes = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
        <div key={0} id={webpage.sections[0]} className={classes.Home}>
            <Menu sections={webpage.sections}/>
            <h1>{webpage.name}: {webpage.title}</h1>
            <LinkButton name={"Github"} href="https://github.com/joshuabaroni" />
            <LinkButton name={"LinkedIn"} href="https://www.linkedin.com/in/joshua-baroni-b50580177/" />
            <LinkButton name={"Facebook"} href="https://www.facebook.com/profile.php?id=100020207475034" />
            <div style={{ 'height':'20px' }} />
            {(this.state.show) ? (() => { return (
                <div>
                    <button
                        style={{ 'margin':'auto', 'display': 'block' }}
                        onClick={this.showNaiveBayes}>
                            Hide Naive Bayes Project Interface
                    </button>
                    <ProjectTemplate className={classes.Project} />
                </div>
                ) })() : (() => {
                    return (
                        <button
                            style={{ 'margin':'auto', 'display': 'block' }}
                            onClick={this.showNaiveBayes}>
                                Show Naive Bayes Project Interface
                        </button>
                    )
                })()}
            {webpage.subpages.map(page => {
                return page();
            })}
        </div>
        )
    }
}

export default EntryPoint;