import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchTerm: ''
    }
  }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.handleSubmit((this.state.searchTerm))
    }
    handleChange = (e) => {
      e.preventDefault();
      this.setState({ searchTerm: e.target.value.toLowerCase() })
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <input
              type='search'
              name='search'
              placeholder='Search...'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />
            <input type="submit" value='GO!' />
        </form>
      );
    }
  }

export default Search;
