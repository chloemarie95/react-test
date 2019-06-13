import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './spinner';

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

        // this is only time we do direct assignment 
        // to this.state - setState any other time

    state = { lat: null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }


    // Helper method
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept location request" />;
    }

    // Avoid using multiple return statements in render
    // Only use for common styles/components 
    // E.g. red border for all pages

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
        
    
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
);