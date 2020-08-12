import React from 'react';

import studentData from '../helpers/data/studentData';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
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
