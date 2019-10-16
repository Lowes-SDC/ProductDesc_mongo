import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import Header from "./components/layouts/Header.jsx";
import Banner from "./components/layouts/Banner.jsx";
import Shipbanner from "./components/layouts/Shipbanner.jsx";
import Footer from "./components/layouts/Footer.jsx";

//window.changeWindow = new Event("changeWindow");
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        example: [{
            ID: '',
            Prices: '',
            Descriptions: ''
        }]
      };
      this.getTask = this.getTask.bind(this);

    }

    getTask() {
        axios({
            method: 'get',
            url: '/todo',
        })
        .then(results => {
            this.setState({
                example: results.data
            });
        });
        
    }
  
    componentDidMount() {
    this.getTask();
    }
  

    render() {
      return (
        <div>
            <h1>Hi</h1>
            <Footer/>
        </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById("description"));
