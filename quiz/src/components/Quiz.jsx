import { Component } from "react";
import "./Quiz.css"

export default class Quiz extends Component{

    render(){
    
        return(
            <>
            <div id="container-2">
                <h2>Question</h2>
                <br />
                <p id="page">1 of 15</p>
                <p>Which is the only mammal that can jump?</p>

                <div className="container">
                <div className="options">
                    <div className="op-1"><p className="choice">Dog</p></div>
                    <div className="op-2"><p className="choice">Elephant</p></div>
                </div>

                <div className="options">
                    <div className="op-3"><p className="choice">Goat</p></div>
                    <div className="op-4"><p className="choice">Lion</p></div>
                </div>
                </div>

                <div className="buttons">
                    <button id="button-1">Previous</button>
                    <button id="button-2">Next</button>
                    <button id="button-3">Quit</button>
                </div>
    
            </div>
            <hr />
            </>
    
        )
    }
    
    }
    