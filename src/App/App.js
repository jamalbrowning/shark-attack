import React from 'react';

import studentData from '../helpers/data/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    lvingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentData.livingStudents();
    const deadStudents = studentData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    return (
      <div className="App">
        <h1>The Shark Tank</h1>
        <button className="btn btn-info">Shark Attack</button>
      </div>
    );
  }
}

export default App;
