import React, { Component } from 'react'

export default class GraduateList extends Component {
  state = {
    graduates: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }

  render() {
    return <div></div>;
  }
}
