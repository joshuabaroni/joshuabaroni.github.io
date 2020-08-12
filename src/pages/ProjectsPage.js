import React, {Component} from 'react'
import NaiveBayesInterface from "../pages/NaiveBayesInterface"

class ProjectsPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    showNaiveBayes = () => {
        console.log("clicked!" + this.state.show)
        this.setState({show: !this.state.show})
    }

    render() {
        return (
            <div>
                Project 1: Naive Bayes ML Algorithm in Java
            {(this.state.show) ? (
                <div style={{'padding-top':'1em'}}>
                    <button
                        style={{ 'margin':'auto', 'display': 'block', 'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)' }}
                        onClick={this.showNaiveBayes}>
                            Hide Naive Bayes Project Interface
                    </button>
                    <NaiveBayesInterface />
                </div>
                )
                :(
                <div style={{'padding-top':'1em'}}>
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
    }

}
export default ProjectsPage;