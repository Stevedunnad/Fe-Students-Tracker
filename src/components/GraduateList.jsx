import React, { Component } from 'react'
import * as api from './../utils/api'

export default class GraduateList extends Component {
  state = {
    graduates: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllGraduates().then((graduates) => {
      console.log(graduates)
      this.setState({ graduates, isLoading: false });
    });
  }

  // componentDidUpdate(prevProps, PrevState) {
  //   if(prevProps.id !== this.props.id) {
  //     this.Graduates(this.props.id)
  //   }
  // }

  render() {
    const { graduates, isloading } = this.state;
    if (isloading) return <h5>Loading ...</h5>;



    return (<main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Starting Cohort</th>
            </tr>
          </thead>
          <tbody>
            {graduates.map(({name, currentBlock, _id, startingCohort}) => (
              <tr key={_id}>
                <td>{name}</td>
                <td>{startingCohort}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>);
  }
}
