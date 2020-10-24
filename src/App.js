import React from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import QuoteCard from './components/QuoteCard';
// import QuoteList from './components/QuoteList';
// import QuoteForm from './components/QuoteForm';
// import './App.css';

const sampleQuote = {
  quote: "That's where I saw the leprechaun...He told me to burn things.",
  character: "Ralph Wiggum",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: sampleQuote
    };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <QuoteCard quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>Get quote</button>
      </div>
    );
  }
}

export default App;
