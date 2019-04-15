import  GeneratePerso  from  './GeneratePerso';
import  DisplayPerso  from  './DisplayPerso';
import React, { Component } from 'react';
import './App.css';

const samplePerso=
[
    {
     "quote": "Le vol à l'étalage est un crime sans victime, comme frapper quelqu'un dans le noir.",
     "character": "Nelson Muntz",
     "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
     "characterDirection": "Left"
    }
  ]


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // on peut mettre notre sampleEmployee par défaut
      // afin d'avoir toujours un employé d'affiché
    perso: samplePerso[0]

    };
  }  

  getPerso() {
    // Récupération de l'employé via fetch
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
      .then(response  =>  response.json())
      .then(data  => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          perso:  data[0],
        });
    });
  }
 
  
  render() {

    return (
     
      
      <div className="App">
       
        <GeneratePerso  selectPerso={() =>  this.getPerso()}   />
        <DisplayPerso  perso={this.state.perso}  />
      </div>
    );
  }
}

export default App;
