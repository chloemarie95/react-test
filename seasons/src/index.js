import React from 'react';
import ReactDOM from 'react-dom';

// Example of functional component - Class better to use

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>;
// };

// Improved class based component 

class App extends React.Component {
    constructor(props) {
        super(props);

        // this is only time we do direct assignment 
        // to this.state - setState any other time
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ lat: position.coords.latitude });
            },
            (err) => console.log(err)
        );
    }

    render() {
        return <div>Latitude: {this.state.lat}</div>;
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);