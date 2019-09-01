import React, { Component } from 'react';

class Report extends Component {
    render() {
        return (
            <div className="container">
                <h1>Redovisning</h1>
                <a href="https://github.com/Jimpxx/me-react">Repots Github</a>

                <h2>me-vue</h2>
                <p>This project is done in Vue.js and it is done for the course DV1612 JavaScript-baserade webbramverk at BTH.</p>
                <h3>Project setup</h3>
                <p>npm install</p>
                <h3>Compiles and hot-reloads for development</h3>
                <p>npm run serve</p>
                <h3>Compiles and minifies for production</h3>
                <p>npm run build</p>
                <h3>Run your tests</h3>
                <p>npm run test</p>
                <h3>Lints and fixes files</h3>
                <p>npm run lint</p>
                <h3>Customize configuration</h3>
                <p>See [Configuration Reference](https://cli.vuejs.org/config/).</p>
            </div>
        );
    }
}


export default Report;
