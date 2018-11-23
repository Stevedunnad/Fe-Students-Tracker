# Developer Pathway Student Tracker

## Learning outcomes

- The importance of 'Thinking in React' when developing with React
- Clear understanding of 'where state should sit' and how we decide
- Translate user stories into software that delivers business value
- Extracting business logic (and making sure it's well tested)
- Consolidate your understanding of the fundamentals of React

## The problem

- Since launching Developer Pathway, Northcoders has identified a need to better track students' journeys through the course.
- In particular, every two weeks, during 'block review' - students are either graduated from a block if their understanding of the block's learning outcomes is sufficient, or they are asked to resit it.
- New students also join the course (on block 1) on the day of a block review.

## The desired solution

Northcoders has hired you and your pair as contractors to deliver a prototype for a 'student tracker'. At this stage, we have a database of student details and a rudimentary API. This API has endpoints to serve up the data and allow developers to edit or add new information. You need to create a user friendly interface so that coders and non-coders can view and edit students' information.

Northcoders' team have given you a list of user stories for the application:

- As an admin, I want to add new students to the system so that I can begin tracking them.
- As an admin, I want to see which block each student is in so that I know where they are in the course.
- As an admin, I want to graduate all relevant students from their respective blocks when it’s appropriate to do so.
- As an admin, I want to see which cohort a student began the course on so that I can see how starting cohorts diverge.
- As an admin, I want a visual indicator that I’ve either graduated a student or not from a block, so I can make sure I’ve considered all the students.
- As an admin, I want a visual indicator of ‘how many times’ a student has been on a block so that I can make sure we’re properly supporting students who are resitting.
- As an admin, I want to clearly see how many students are on each block so that I can plan accordingly.
- As an admin, I want to clearly see how many students are on the course so that I can plan accordingly.
- As an admin, I want to see ‘graduation rates’ from each block so that I can prioritise which parts of the course to improve.
- As an admin, I want to see a list of graduates so I can feel good about my job.
- As an admin, I want to see what the average time through the course is for graduates so that I can monitor it over time.
- As an admin, I want to be able to remove people from the course so that we can account for the occasional leaver.
- As an admin, I want to see how many pathways through the course there have been so that we can communicate that to relevant stakeholders.

## Getting the data

- We are obviously going to need some data in order to build the user interface for the student-tracker. Our react application can then make API requests and display the information on the page. For this purpose, we have built several API end-points for you to retrieve data about the students, block and cohorts at northcoders.

You can find the API [here](https://nc-student-tracker.herokuapp.com)
The endpoints serve up the following:

### **GET** `/api/students`

- This serves up an array of students in the form

```json
{
  "_id": "5bbf0b168902695948a9ec74",
  "name": "Lamar Quigley",
  "startingCohort": 3,
  "currentBlock": "front-end-2"
}
```

### **GET** `/api/students/:id`

- This serves up a student object in the form

```json
{
  "student": {
    "_id": "5bd0755a064fe4246d4975b9",
    "name": "Macey Watsica",
    "startingCohort": 11,
    "blockHistory": [
      {
        "_id": "5bd0755a064fe4246d4975b2",
        "number": 1,
        "name": "Core",
        "slug": "core"
      },
      {
        "_id": "5bd0755a064fe4246d4975b2",
        "number": 1,
        "name": "Core",
        "slug": "core"
      },
      {
        "_id": "5bd0755a064fe4246d4975b3",
        "number": 2,
        "name": "Back End 1",
        "slug": "back-end-1"
      }
    ],
    "__v": 0
  }
}
```

The `blockHistory` is an array representing a student's completion of blocks. Each item represents a block.
I.e. The student above will have sat core twice and will currently be on back-end-1.  

### **PATCH** `/api/students/:id?progress={true/false}`

- Update a student's `blockHistory` following block reviews. Returns a student in the same format as **GET** `/api/students/:id`.

### **POST** `/api/students`

- You should be able to post a body to this end-point in the below form. This endpoint returns a student in the same format as **GET** `/api/students/:id`.

```json
{
  "name": "Ant Medina",
  "startingCohort": 1
}
```

### **GET** `/api/blocks/:block_slug/students`

- This will get an array of all the students in a particular block. Displaying students in the same format as **GET** `/api/students`

### **GET** `/api/cohorts/:cohort_number/students`

- This will get an array of all the students who started on a particular cohort. Displaying students in the same format as **GET** `/api/students`

### **DELETE** `/api/students/:id`

- This will delete a given student by their id.

**Quick, before we lose a student!**

## Tips

- **Every** time you develop a React app from scratch, you should go through the process of [Thinking in React](https://reactjs.org/docs/thinking-in-react.html)
- The user stories don't necessarily need to be implemented in the order given - sometimes it's best to pick off low hanging fruit first
- React's [lifecycle](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) is going to be important!
