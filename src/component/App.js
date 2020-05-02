import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'
import ImageList from './ImageList'

class App extends React.Component {
  state = { images: [] }
  onSearchBarSubmit = (text) => {
    unsplash.get('/search/photos', { params: { query: text } })
      .then(({ data }) => this.setState({ images: data.results }))
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchBarSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;