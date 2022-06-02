import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            (pos) => this.setState({ lat: pos.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage) {
            return <h2>Error: {this.state.errorMessage}</h2>
        } else if (this.state.lat) {
            return <h2>Latitude: {this.state.lat}</h2>
        }
        return <h2>Loading...</h2>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));