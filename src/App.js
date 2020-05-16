import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="jumbotron dark">
          <h1 className="jumboH1">Age of Mythology</h1>
        </div>

        <div className="main">
          <div>
            <div className="col-md-12 colorfulBlock">
              <h2 className="jumboH2">Know about the characters of mythic age</h2>
            </div>


            <div className="col-md-12 colorfulBlock3">
              <div className="container">
                <div className=" col-md-4">
                  <div className=" threebox"><p className="threeboxtext">Greek</p></div>
                </div>
                <div className=" col-md-4">
                  <div className=" threebox"><p className="threeboxtext">Egyptian</p></div>
                </div>
                <div className=" col-md-4">
                  <div className=" threebox"><p className="threeboxtext"></p>Norse</div>
                </div>
              </div>
            </div>


          </div>

        </div>



        <div className="footer">
          <p className="footerText">made with <span className="heartbeating"> &#10084; </span>using react</p>
        </div>

      </div>
    );
  }
}
export default App;
