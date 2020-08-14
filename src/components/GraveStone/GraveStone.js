import React from 'react';

import studentShape from '../../helpers/props/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    deadStudent: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card">
          <h4 className="card-title">{student.firstName}</h4>
          <h4 className="card-title">{student.lastName}</h4>
      </div>
    );
  }
}

export default GraveStone;
