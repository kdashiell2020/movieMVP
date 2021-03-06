import React, {useState} from 'react';
import { Button } from '@material-ui/core';
import SignIn from './components/Signin.jsx';
import Cocktails from './components/Cocktails.jsx'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
    const [currentView, setView] = useState('signin');
    return (
        <div>
            {   currentView ?
                <SignIn setView={setView} /> :
                <Cocktails />
            }
        </div>

    )
}

export default App;

{/* <Router>
            <Switch>
                <Route path="/" exact>
                    <SignIn />
                </Route>

                <Route path="/cocktails" exact>
                    <RecipeReviewCard />
                </Route>
            </Switch>
        </Router> */}

// class Add extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       add: ''
//     }
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.handleAdd((this.state.add))
//   }

//   handleChange = (e) => {
//     e.preventDefault();
//     this.setState({ add: e.target.value })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           name="add"
//           value={this.state.add}
//           onChange={this.handleChange}
//         />
//         <input type="submit" value='Add' />
//       </form>
//     )
//   }
// }


// //```````````````````````````````````//


// class App extends React.Component {
//   state = {
//     searchTerm: '',
//     movies: this.props.movies,
//     newMovie: ''
//   };

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   }

//   handleSubmit = (searchTerm) => {

//     let movies = [...this.state.movies].filter(mov => mov.title.toLowerCase().includes(searchTerm));
//     this.setState({
//       movies: movies,
//       searchTerm: ''
//     });

//   }

//   handleAdd = movie => {
//     this.setState({
//       movies: this.state.movies.push({title: movie})
//     })
//   }

//   render() {
//     let { movies, searchTerm } = this.state;
//     return (
//       <div>
//         <h1>MovieList</h1>
//         <Add  handleAdd={this.handleAdd} />
//         <Search movies={movies} handleSubmit={this.handleSubmit}/>
//         <List movies={movies} />
//       </div>
//     );
//   }
// }

