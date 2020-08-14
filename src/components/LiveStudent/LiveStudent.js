import React from 'react';
// import PropTypes from 'prop-types';

import studentShape from '../../helpers/props/studentShape';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    liveStudent: studentShape.studentShape,
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

export default LiveStudent;
