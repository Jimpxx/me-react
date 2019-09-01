import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';

import Me from './Me';
import Report from './Report';

import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/">Me</Link>
                            </li>
                            <li>
                                <Link to="/reports/week/1">Report</Link>
                            </li>
                        </ul>
                    </div>

                    <Route exact path="/" component={Me} />
                    <Route path="/reports/week/1" component={Report} />

                    <footer class="site-footer">
                        <p>Copyright &copy; 2018 Jimmy Andersson</p>
                    </footer>
                </div>
            </Router>
        );
    }
}


export default App;
