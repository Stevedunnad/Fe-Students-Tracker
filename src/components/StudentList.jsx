import React, { Component } from "react";
import * as api from "../utils/api";

export default class StudentList extends Component {
  state = {
    students: [],
    isLoading: true,
  };

  componentDidMount() {
    api.getAllStudents().then((students) => {
      this.setState({ students, isLoading: false });
    });
  }
  componentDidUpdate(prevProps, PervState) {
    if(prevProps.sort_by !== this.props.sort_by) {
      api.getAllStudents(this.props.sort_by)
      .then((students) => {
        this.setState({students, isloading: false})
      })
    }
  }

  getStudents = () => {
    api.getAllStudents(this.props.sort_by).then((students) => {
      this.setState({students, isloading: false})
    })
  }


  render() {
    const { students, isloading } = this.state;
    if (isloading) return <h5>Loading ...</h5>;
     console.log(students.length)

    let  isGrad = students.filter((student) => {
       return student.currentBlock === "grad"
     })
     console.log(isGrad);
    return (
      <main>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Starting Cohort</th>
              <th>Current Block</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id}>
                <td>{student.name}</td>
                <td>{student.startingCohort}</td>
                <td>{student.currentBlock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}
