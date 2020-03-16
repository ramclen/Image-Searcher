import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = (event) =>{
    event.preventDefault();

    this.props.onSubmit(this.state.term)
  }

  onInputChange = (event) => {
    this.setState({term: event.target.value});
  }

  render(){
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit} >
          <div className="field">
            <label>Image Search</label>
            <input type="text" name="search" onChange={this.onInputChange} placeholder="Search" />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;