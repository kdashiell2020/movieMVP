import React from 'react';
import { Button } from '@material-ui/core';


// let List = (props) => (
//   <ul>
//      {props.movies.map((e,i) => <li key={i}>{`xxxx   `}{e.title}</li>)}
//   </ul>
// );


// class Search extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         searchTerm: ''
//     }
//   }
//     handleSubmit = (e) => {
//       e.preventDefault();
//       this.props.handleSubmit((this.state.searchTerm))
//     }
//     handleChange = (e) => {
//       e.preventDefault();
//       this.setState({ searchTerm: e.target.value.toLowerCase() })
//     }
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//             <input
//               type='search'
//               name='search'
//               placeholder='Search...'
//               value={this.state.searchTerm}
//               onChange={this.handleChange}
//             />
//             <input type="submit" value='GO!' />
//         </form>
//       );
//     }
//   }



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


const App = () => <Button color="primary">Hello World</Button>;


export default App;