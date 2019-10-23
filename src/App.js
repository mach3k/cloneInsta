import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/photo';

// import { Container } from './styles';

class App extends Component {
  render() {
    const imageData = {
      src: "https://images.unsplash.com/photo-1508182314998-3bd49473002f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af394daae4bdbc4a95dc2204984b790d&auto=format&fit=crop&w=800&q=60",
      user: {
        name: "Marcelo Ramos Machado",
        profile_image: "https://avatars0.githubusercontent.com/u/8934055?s=460&v=4",
        link: "https://github.com/mach3k"
      }
    }

    return (
    <div className="App">
      <Photo {...imageData}/>
    </div>
    );
  }
}
export default App;