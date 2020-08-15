import React from 'react';
import Proptypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';

import './SharkTank.scss';

import studentShape from '../../helpers/props/studentShape';

class SharkTank extends React.Component {
  static propType = {
    livingStudents: Proptypes.arrayOf(studentShape.studentShape),
    followTheLight: Proptypes.func,
  }

  followTheLightEvent = (e) => {
    e.preventDefault();
    const { followTheLight } = this.props;
    followTheLight();
  }

  render() {
    const { livingStudents } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ));

    return (
      <div className="the-tank">
        <h2>The Shark Tank</h2>
        <button className="btn btn-info" onClick={this.followTheLightEvent}>Shark Attack</button>
        <div className="card-columns">
        { livingStudentCards }
        </div>
      </div>
    );
  }
}

export default SharkTank;
