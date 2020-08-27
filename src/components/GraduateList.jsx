import React, { Component } from 'react'

export default class GraduateList extends Component {
  state = {
    graduates: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllGraduates().then((graduates) => {
      this.setState({ graduates, isLoading: false });
    });
  }

  render() {
    return <div></div>;
  }
}
