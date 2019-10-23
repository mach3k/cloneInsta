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
        name: "Luca Bravo",
        profile_image: "https://images.unsplash.com/profile-1441298803695-accd94000cac?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32&s=7cfe3b93750cb0c93e2f7caec08b5a41",
        link: "https://unsplash.com/@lucabravo"
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