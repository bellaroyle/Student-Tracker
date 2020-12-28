# Student Tracker

I was tasked with creating a user friendly interface for a student tracker for a course.
<br>
Here are some user stories I had in mind while creating the application:

- As an admin, I want to be able to view a list of the students currently on the course.
- As an admin, I want to see which block each student is in so that I know where they are in the course.
- As an admin, I want to see a list of graduates so I can feel good about my job.
- As an admin, I want to be able to see a list of students from a specific block.
  <!-- (- As an admin, I want to add new students to the system so that I can begin tracking them.) -->
  <!-- - As an admin, I want to graduate all relevant students from their respective blocks when it’s appropriate to do so. -->
- As an admin, I want to see which cohort a student began the course on so that I can see how starting cohorts diverge.
- As an admin, I want a visual indicator that I’ve either graduated a student or not from a block, so I can make sure I’ve considered all the students.
- As an admin, I want a visual indicator of ‘how many times’ a student has been on a block so that I can make sure we’re properly supporting students who are resitting.
- As an admin, I want to clearly see how many students are on each block so that I can plan accordingly.
- As an admin, I want to clearly see how many students are on the course so that I can plan accordingly.
- As an admin, I want to be able to remove people from the course so that we can account for the occasional leaver.
<!-- - As an admin, I want to see how many pathways through the course there have been so that we can communicate that to relevant stakeholders. -->

## Getting The Data

I made this student tracker whilst at the Northcoders bootcamp. Because of this I only had 2 says to complete the student tracker, and I had access to dummy api so I used this instead of creating my own.

You can find the API [here](https://nc-student-tracker.herokuapp.com).
<br>
The API has the following endpoints:

### **GET** `/api/students?graduated=[true/false]&block=[block_slug]&cohort=[startingCohort]&sort_by=[name/startingCohort]&order=[asc/desc]`

- This serves up an array of students in the below format.

- There are also optional queries to:

  - get students depending on whether they have graduated or not.
  - get students from a specific block
  - get students from a specific cohort
  - sort_by a field
  - order ascending or descending

```json
{
  "_id": "5bbf0b168902695948a9ec74",
  "name": "Lamar Quigley",
  "startingCohort": 3,
  "currentBlock": "fe"
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
        "name": "Fundamentals",
        "slug": "fun"
      },
      {
        "_id": "5bd0755a064fe4246d4975b2",
        "number": 1,
        "name": "Fundamentals",
        "slug": "fun"
      },
      {
        "_id": "5bd0755a064fe4246d4975b3",
        "number": 2,
        "name": "Back End",
        "slug": "be"
      }
    ],
    "__v": 0
  }
}
```

The `blockHistory` is an array representing a student's completion of blocks. Each item represents a block.
I.e. The student above will have sat Fundamentals twice and will currently be on Back-End.

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

### **GET** `/api/blocks`

- This serves up all blocks in the form:

```json
{
    "blocks": [
        {
            "_id": "5bf69a8e4e52992859f5f758",
            "number": 1,
            "name": "Fundamentals",
            "slug": "fun",
            "__v": 0
        },
     ... ]
}
```

### **DELETE** `/api/students/:id`

- This will delete a given student by their id.
