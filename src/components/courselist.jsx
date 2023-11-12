import courses from "../data/courses.json";
import "../styles/course.css";

function filterCourse(event) {
  const filterValue = event.target.value.toLowerCase();
  //console.log(filterValue);

  const filteredCourses = courses.filter((course) =>
    course.instructor.toLowerCase().includes(filterValue)
  );
  console.log(filteredCourses);

  const currCourseList = document.getElementById("course-list");
  currCourseList.innerHTML = "";

  filteredCourses.forEach((course) => {
    const listItem = document.createElement("div");
    listItem.textContent = `${course.name} - ${course.instructor}`;
    listItem.classList.add("course-card");
    currCourseList.append(listItem);
  });
}
function CourseList() {
  return (
    <>
      <h1>Instructor</h1>
      <input
        id="instructorFilter"
        type="text"
        placeholder="Filter by instructor"
        onChange={filterCourse}
      />

      <div className="course" id="course-list">
        {courses.map((course) => {
          return (
            <div key={course.id} className="course-card">
              <strong>{course.name}</strong> - {course.instructor}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default CourseList;
