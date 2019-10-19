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
import { mdiHeartOutline } from '@mdi/js';
import { mdiExportVariant } from '@mdi/js';
import Icon from '@mdi/react';


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
      this.showDiscount = this.getTask.bind(this);

    }

    getTask() {
        axios({
            method: 'get',
            url: '/todo',
        })
        .then(results => {
            this.setState({
                stock: results.data,
                //default: results.data[100],
                itemDescs: results.data[100].Descriptions.split(', '),
                price: results.data[100].Prices.toFixed(2),
                fakePrice: results.data[100].Mockprice.toFixed(2),
                discount: results.data[100].Discount
            });
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
                  {
                    this.state.discount < 1 ?
                    (<p className="price"><sup className="first-letter">$</sup>{this.state.price}</p>)
                    :
                    (
                      <React.Fragment>
                        <p className="price"><sup className="first-letter">$</sup>{this.state.price}
                        <span className="prevPrice">Was {this.state.fakePrice}</span></p>
                        <p className="save">SAVE {this.state.discount}%</p>
                        </React.Fragment>
                    )
                  }
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
                  <hr></hr>
                      <div className="btngrp">
                      <button className="saveButton">
                          <Icon path={mdiHeartOutline}
                            title="Favorite"
                            size="14px"
                            color="#0471AF"
                          />
                          <span id="saveTxt">SAVE</span>
                      </button>
                      <button className="saveButton">
                          <Icon path={mdiExportVariant}
                            title="Favorite"
                            size="14px"
                            color="#0471AF"
                          />
                          <span id="saveTxt">SAVE</span>
                      </button>
                      </div>
                    
                  
                      
                  <hr></hr>
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
        </div>
      )
    }
  }

  App.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  ReactDOM.render(<App />, document.getElementById("description"));
