import { useStudent } from "../StudentContext.jsx";

function Home() {
  const { student } = useStudent();

  return (
    <main className="page">
      <section className="hero">
        <h1>Student Course Management</h1>
        <p>Manage student information and explore available courses.</p>
      </section>

      <section className="student-card">
        <h2>Shared Student Information</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Course:</strong> {student.course}</p>
      </section>
    </main>
  );
}

export default Home;
