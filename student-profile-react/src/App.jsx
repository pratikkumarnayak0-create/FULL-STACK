import Student from "./Student";

function App() {
  return (
    <div className="app">
      <h1>Student Profile</h1>

      <div className="student-container">
        <Student
          name="Pratik Kumar Nayak"
          course="B.Tech CSE (AIML)"
          college="ABC Engineering College"
        />

        <Student
          name="Rahul Kumar"
          course="B.Tech CSE"
          college="XYZ Institute of Technology"
        />
      </div>
    </div>
  );
}

export default App;
