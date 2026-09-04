import { Link, useParams } from "react-router-dom";
import { useStudent } from "../StudentContext.jsx";

function CourseDetails() {
  const { id } = useParams();
  const { student } = useStudent();

  const courses = {
    1: {
      name: "React Development",
      duration: "3 Months",
      instructor: "Amit Kumar",
      description: "Build modern user interfaces with React."
    },
    2: {
      name: "JavaScript Programming",
      duration: "2 Months",
      instructor: "Priya Das",
      description: "Master JavaScript programming and ES6+ concepts."
    }
  };

  const course = courses[id];

  if (!course) {
    return (
      <main className="page">
        <h1>Course Not Found</h1>
        <Link className="button" to="/courses">Back to Courses</Link>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="details-card">
        <h1>{course.name}</h1>
        <p>{course.description}</p>
        <p><strong>Course ID:</strong> {id}</p>
        <p><strong>Duration:</strong> {course.duration}</p>
        <p><strong>Instructor:</strong> {course.instructor}</p>

        <div className="enrolled">
          <h3>Student Information</h3>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>

        <Link className="button" to="/courses">Back to Courses</Link>
      </section>
    </main>
  );
}

export default CourseDetails;
