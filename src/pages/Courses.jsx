import { Link } from "react-router-dom";

function Courses() {
  const courses = [
    {
      id: 1,
      name: "React Development",
      description: "Learn components, props, hooks, routing and modern React."
    },
    {
      id: 2,
      name: "JavaScript Programming",
      description: "Learn JavaScript fundamentals, ES6+, DOM and programming concepts."
    }
  ];

  return (
    <main className="page">
      <h1>Available Courses</h1>

      <div className="course-grid">
        {courses.map((course) => (
          <article className="course-card" key={course.id}>
            <h2>{course.name}</h2>
            <p>{course.description}</p>
            <Link className="button" to={`/course/${course.id}`}>
              View Course
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Courses;
