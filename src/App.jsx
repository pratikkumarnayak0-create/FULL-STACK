import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name,
      email,
      course,
    });

    setName("");
    setEmail("");
    setCourse("");
  };

  return (
    <div className="container">
      <div className="form-card">
        <h1>Student Registration Form</h1>
        <p className="subtitle">Enter student details to register.</p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />

          <label htmlFor="course">Course</label>
          <select
            id="course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            required
          >
            <option value="">Select a course</option>
            <option value="B.Tech">B.Tech</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="BBA">BBA</option>
          </select>

          <button type="submit">Register Student</button>
        </form>
      </div>

      {student && (
        <div className="result-card">
          <h2>Submitted Student Details</h2>
          <div className="detail">
            <span>Name</span>
            <strong>{student.name}</strong>
          </div>
          <div className="detail">
            <span>Email</span>
            <strong>{student.email}</strong>
          </div>
          <div className="detail">
            <span>Course</span>
            <strong>{student.course}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
