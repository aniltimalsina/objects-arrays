import courses from "../data/courses.json";
import "../styles/course.css";
function CourseList() {
  return (
    <>
      <h1>Instructor</h1>
      <div className="course">
        {courses.map((course) => {
          return (
            <div key={course.id} className="course-card">
              {"Course Name = " +
                course.name +
                "\n" +
                "Instructor = " +
                course.instructor}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CourseList;
