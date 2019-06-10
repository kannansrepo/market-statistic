import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style/index.css";
import "github-fork-ribbon-css/gh-fork-ribbon.css";
import configureStore from './redux/configureStore';
import {Provider} from 'react-redux';

const store = configureStore()
ReactDOM.render(<Provider store = {store}><App /></Provider>, document.getElementById("app"));