function Student(props) {
  return (
    <div className="student-card">
      <h2>{props.name}</h2>
      <p><strong>Course:</strong> {props.course}</p>
      <p><strong>College:</strong> {props.college}</p>
    </div>
  );
}

export default Student;
