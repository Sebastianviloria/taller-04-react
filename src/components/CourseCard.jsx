function CourseCard({ icon, title, description, level }) {
  return (
    <div className="course-card">
      <span className="course-icon">{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`course-badge badge-${level.toLowerCase()}`}>
        {level}
      </span>
    </div>
  );
}

export default CourseCard;