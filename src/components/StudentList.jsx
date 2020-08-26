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
    return (
      <div>
        
      </div>
    )
  }
}
