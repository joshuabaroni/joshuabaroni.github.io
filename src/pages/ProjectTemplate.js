import React, { Component } from 'react'
const Http = new XMLHttpRequest();
const prodURL = "https://naivebayesjava.herokuapp.com";
const devURL = "http://localhost:8080";

// change devURL to prodURL before pushing to github
// change HttpRequest to HttpsRequest
const ApiURL = {
    // GET calls
    list_files: prodURL + "/list_available_files",
    get_model: prodURL + "/get_model",
    get_model_accuracy: prodURL + "/get_model_accuracy",
    // POST calls
    set_file: (fileKey) => {
        return prodURL + `/set_file?fileKey=${fileKey}`
    }
}

// GET Template
// Simple GET request using fetch
async function getCall(url) {
    let options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        accept: { 'Accept': 'application/json' }
    };
    let response = await fetch(url, options);
    let data = await response.text();
    console.log(`Response received from ${ApiURL.get_model_accuracy} with code ${response.status}`)
    data = JSON.stringify(data);
    data = JSON.parse(data);
    return data;
}

// POST Template
// Simple POST request with a JSON body using fetch
async function sendRequestHandler(fileKey) {
    const requestOptionsPOST = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
        // body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch(ApiURL.set_file(fileKey), requestOptionsPOST)
        .then(response => {
                console.log(`POST request sent to ${ApiURL.set_file(fileKey)} with code ${response.status}`)
            } )
}

class ProjectTemplate extends Component {

    constructor() {
        super();
        this.state = {
            input: "",
            output: []
        }
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    }

    callSetData = () => {
        sendRequestHandler(this.state.input)
    }

    callListOfFiles = () => {
        getCall(ApiURL.list_files).then(data => {
            this.setState({ output: data })
        });
    }

    // callCurrentModel = () => {
        
    // }

    callGetModel = () => {
        getCall(ApiURL.get_model).then(data => {
            this.setState({ output: data })
        })
    }

    callGetModelAccuracy = () => {
        getCall(ApiURL.get_model_accuracy).then(data => {
            this.setState({ output: data });
        });
    }

    // callGetTrainingData = () => {

    // }

    render() {
        return <div>
            <h3>Welcome to Naive Bayes Java!</h3>
            <p>The REST API for this project is hosted at</p>
            <a style={{'display':'block', 'padding-bottom':'1.5em', 'color':'rgb(0, 150, 196)'}} href="https://naivebayesjava.herokuapp.com/swagger-ui.html#/">https://naivebayesjava.herokuapp.com/</a>
            <button style={{'display':'inline', 'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}} onClick={this.callListOfFiles}>
                Get List of Valid Files
            </button>
            <button style={{'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}} onClick={this.callGetModel}>
                Get Model
            </button>
            <button style={{'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}} onClick={this.callGetModelAccuracy}>
                Get Model Accuracy
            </button>
            <div style={{'margin':'auto', 'display':'block'}}>
                <input style={{'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}} type='text' value={this.state.input} onChange={this.handleChange}/>
                <button style={{'background':'rgb(32, 32, 32)', 'color':'rgb(190, 190, 190)'}} onClick={this.callSetData}>
                    Set Training Data File
                </button>
            </div>
            {/* <button onClick={this.callGetTrainingData}>
                Get Training Data Arff Files
            </button> */}
            <output type='textBox' style={{ 'padding':'1.25em', 'display':'block', 'Height': '30px', 'Width': '300px' }}>
            { Object.keys(this.state.output).map(key => {
                return (
                    this.state.output[key]
                )
            }) }
            </output>
        </div>
    }
}

export default ProjectTemplate;