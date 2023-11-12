import students from "../data/students.json";
import "../styles/students.css";
function StudentList() {
  return (
    <>
      <h1>Student List</h1>
      <div className="students">
        {students.map((student) => {
          return (
            <div key={student.id} className="card">
              {"Name = " +
                student.name +
                " " +
                "Age = " +
                student.age +
                " " +
                "Courses Enrolled : " +
                student.courses}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StudentList;
