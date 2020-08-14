import React from 'react';
import Proptypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';

import './Graveyard.scss';

import studentShape from '../../helpers/props/studentShape';

class Graveyard extends React.Component {
  static propType = {
    deadStudents: Proptypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;

    const deadStudentCards = deadStudents.map((student) => (
      <GraveStone key={student.id} student={student} />
    ));

    return (
      <div className="the-grave">
        <h2>The Grave Yard</h2>
        <div className="card-columns">
          { deadStudentCards }
        </div>
      </div>
    );
  }
}

export default Graveyard;
