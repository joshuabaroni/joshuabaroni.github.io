import React, {Component} from 'react'
import * as d3 from 'd3'
import NaiveBayesInterface from "../pages/NaiveBayesInterface"

class ProjectsPage extends Component {
    
    constructor(props) {
        super(props);
        this.ref = React.createRef();
        this.state = {
            drawn: false,
            show: false
        }
    }

    renderProjects = {
        projects: [
            () => {
                return (
                    <div>
                        Project 1: Naive Bayes ML Algorithm in Java
                        {(this.state.show) ? (
                            <div style={{'padding-top':'0.5em'}}>
                                <button
                                    style={{ 'margin':'auto', 'display': 'block', 'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)' }}
                                    onClick={this.showNaiveBayes}>
                                        Hide Naive Bayes Project Interface
                                </button>
                                <NaiveBayesInterface />
                            </div>
                            )
                            :(
                            <div style={{'padding-top':'0.5em'}}>
                                <button
                                    style={{ 'margin':'auto', 'display': 'block', 'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)' }}
                                    onClick={this.showNaiveBayes}>
                                        Show Naive Bayes Project Interface
                                </button>
                            </div>
                            )
                        }
                </div>
                )
            },
            () => {
                return (
                    <div style={{'padding':'1em'}}>
                        Project 2: D3 Data Visualization (Under Construction)
                        <div style={{'padding-top':'0.5em'}} ref={this.ref}>
                            <button
                                style={{'margin':'auto', 'display':'block', 'background-color':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}}
                                onClick={this.drawChart}>
                                    Draw a Chart with Randomized Dummy Data
                                </button>
                        </div>
                    </div>
                )
            }
        ]
    }

    drawChart = () => {
        if (!this.state.drawn) { // todo plug in real data here
            this.setState({drawn: true});
            const data = [];

            for (let i = 0; i < 7; i++) {
                data.push(Math.random() * 40)
            }

            const w = 500;
            const h = 400;

            var accessToRef = d3.select(this.ref.current)
                .append("svg")
                .attr("width", w)
                .attr("height", h)
                .style("background-color", "rgb(54, 54, 54)")
                .style("padding", 10)
                .style("margin", "auto")

            console.log('accessToRef', accessToRef)

            accessToRef = accessToRef.selectAll("rect")
                .data(data)
                .enter()
            
            console.log('accessToRef', accessToRef)

            accessToRef.append("rect")
                .attr("x", (d, i) => i * 70)
                .attr("y", (d, i) => h - 10 * d)
                .attr("width", 65)
                .attr("height", (d, i) => d * 10)
                .attr("fill", "#61DBFB");
        } else {
            console.log("already drawn")
        }
    }

    showNaiveBayes = () => {
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                {this.renderProjects.projects.map(page => {
                    return page();
                })}
            </div>
        )
    }

}
export default ProjectsPage;