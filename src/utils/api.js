import axios from 'axios';

export const getAllStudents = () => {
  return axios
  .get('https://nc-student-tracker.herokuapp.com/api/students')
  .then((res) => {
   return res.data.students
  })
  .catch(function (error) {
    console.log(error);
  })
}