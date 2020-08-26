import React, { Component } from 'react'
import * as api from './../utils/api'

export default class StudentList extends Component {

  state = {
    students: [],
    isLoading: true
  }

  componentDidMount () {
    api.getAllStudents().then((students) => {
      this.setState({students, isLoading: false})
    })
    
    
  }
  
  render() {
    const { students, isloading } = this.state

    return (
      <main>
        <ul>
          {students.map((student) => {
            return (
            <li key={student._id}>
                <h3>Name: {student.name}</h3>
                <p>Cohort: {student.startingCohort}</p>
                <p>Block: {student.currentBlock}</p>
            </li>
            )
          })
          }
        </ul>
      </main>
    )
  }
}


// {
//   _id: "5f4667cde90cc000175a176c",
//     name: "Helen",
//       startingCohort: 0,
//         currentBlock: "fun"
// },
