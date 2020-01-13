import React from 'react';
import '../stylesheets/App.scss';
import { Switch, Route } from 'react-router-dom';

import { fetchCharacters } from '../services/fetchCharacters';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({
          api: data.results
        })
      })
  }

  handleChange(value) {
    this.setState({
      search: value
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App__header">
          <div className="header__container">
            <h1 className="App__title">Rick and Morty Searcher</h1>
          </div>
        </header>

      </div>
    );
  }
}

export default App;

