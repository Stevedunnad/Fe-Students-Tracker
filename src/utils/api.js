import axios from 'axios';

export const getAllStudents = (sort_by) => {
  return axios
  .get('https://nc-student-tracker.herokuapp.com/api/students', {params: {sort_by} })
  .then((res) => {
   return res.data.students
  })
  .catch(function (error) {
    console.log(error);
  })
}

export const getAllBlocks = () => {
  return axios.get('https://nc-student-tracker.herokuapp.com/api/blocks')
  .then((res) => {
    return res.data.blocks
  })
  .catch((error) => {
    console.log(error)
  })
}
// export const getAllGraduates = () => {
//   return axios.get('https://nc-student-tracker.herokuapp.com/api/students?sort_by=graduated')
//   .then((res) => {
//     return res.data.graduates
//   })
//   .catch((error) => {
//     console.log(error)
//   })
// }
