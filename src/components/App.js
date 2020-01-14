import React from 'react';
import '../stylesheets/App.scss';
import { Switch, Route } from 'react-router-dom';
import Filters from './Filters';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import { fetchCharacters } from '../services/fetchCharacters';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);

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
        <Switch>
          <Route exact path="/" >
            <Filters
              handleChange={this.handleChange}
              search={this.state.search}
            />
            <CharacterList
              api={this.state.api}
              search={this.state.search}
            />
          </Route>
          <Route path="/character-detail/:characterId" render={routerProps => {
            return (
              <CharacterDetail
                routerProps={routerProps}
                api={this.state.api}
              />
            );
          }} />
          />
        </Switch>
      </div>
    );
  }
}

export default App;

