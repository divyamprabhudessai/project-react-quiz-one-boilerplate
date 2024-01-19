import { Component } from "react";
import './Result.css'

export default class Result extends Component{

    render(){
    
        return(
            <>
            <div id="container-3">
            <h2 id="res">Result</h2>
            <div className="score">
                <h2>You need more practice</h2>
                <h1 id="score">Your score is 20%</h1>
                <br />
                
                <div className="stats">
                    <div>Total number of questions</div>
                    <div>15</div>
                </div>
                <br />

                <div className="stats">
                    <div>Number of questions attempted</div>
                    <div>9</div>
                </div>
                <br />

                <div className="stats">
                    <div>Number of correct answers</div>
                    <div>3</div>
                </div>
                <br />

                <div className="stats">
                    <div>Number of wrong answers</div>
                    <div>6</div>
                </div>
                <br />

            </div>
            
            <div className="buttons">
                <button id="but-1">Play agaian</button>
                <button id="but-2">Back to home</button>
            </div>
            </div>
            <hr />
            </>
    
        )
    }
    
    }
    