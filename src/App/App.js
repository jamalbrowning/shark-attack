import React from 'react';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentData from '../helpers/data/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    livingStudents: [],
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
        <h1>Tank</h1>
        <SharkTank livingStudents={this.state.livingStudents} />
        <Graveyard deadStudents={this.state.deadStudents}/>
      </div>
    );
  }
}

export default App;
