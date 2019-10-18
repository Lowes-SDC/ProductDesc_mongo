import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from "./components/layouts/Header.jsx";
import Banner from "./components/layouts/Banner.jsx";
import Shipbanner from "./components/layouts/Shipbanner.jsx";
import Footer from "./components/layouts/Footer.jsx";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

//window.changeWindow = new Event("changeWindow");
export default class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        stock: [{
            ID: '',
            Prices: '',
            Descriptions: ''
        }],
        default: '',
        itemDescs: [],
      };
      this.getTask = this.getTask.bind(this);

    }

    getTask() {
        axios({
            method: 'get',
            url: '/todo',
        })
        .then(results => {
            let discount = Math.floor(Math.random() * (51 - 3) ) + 3;
            this.setState({
                stock: results.data,
                default: results.data[25],
                itemDescs: results.data[25].Descriptions.split(', '),
                price: results.data[25].Prices,
                fakePrice: Math.round(100*((results.data[25].Prices/(100-discount)) * 100))/100,
                discount: discount
            });
            //console.log(this.state.stock);
            //console.log(this.state.itemDescs);
            console.log(results.data[25]);
            console.log(this.state.price);
            console.log(this.state.fakePrice);
        });
        
    }

    componentWillMount(){
      this.getTask();
    }
  
    // componentDidMount() {
    
    
    // }

    
  

    render() {
      return (
        <div className="">
            <Paper className="description">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                  <p className="price"><sup className="first-letter">$</sup>{this.state.price}
                  <span className="prevPrice">Was {this.state.fakePrice}</span></p>
                  <p className="save">Save {this.state.discount}%</p>
                </Grid>
              </Grid>
            </Paper>
            <Paper className="">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                  <ul className="bullets">
                    {this.state.itemDescs.map(value => (
                    <li key={value} className="bulletpoint">{value}</li>))}
                  </ul>
                  <hr className=""></hr>
                </Grid>
                
              </Grid>
              
            </Paper>
            <Paper className="">
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs>
                  <Typography>message</Typography>
                </Grid>
              </Grid>
            </Paper>
            <Footer/>
        </div>
      )
    }
  }

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  ReactDOM.render(<App />, document.getElementById("description"));
