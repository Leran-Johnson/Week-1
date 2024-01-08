// App.js
import React, { Component } from 'react';
import BasicInfo from './basicInfo';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: [
        {
          name: 'Leran Johnson',
          number: '123-456-7890',
          dateOfBirth: 'April 20, 2004'
        },
        {
          name: 'Viego Santiarul Molach vol Kalah Heigaar',
          number: '987-654-3210',
          dateOfBirth: '47 BN'
        },
        {
          name: 'John Doe',
          number: '151-615-3210',
          dateOfBirth: 'February 15, 1985'
        }
      ]
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.people.map((person, index) => (
          <BasicInfo key={index} person={person} />
        ))}
      </div>
    );
  }
}

export default App;

