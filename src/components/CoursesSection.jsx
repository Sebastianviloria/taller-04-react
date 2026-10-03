import CourseCard from "./CourseCard";

const cursos = [
  {
    id: 1,
    icon: "⚛️",
    title: "React Básico",
    description:
      "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.",
    level: "Principiante",
  },
  {
    id: 2,
    icon: "🔁",
    title: "React Hooks",
    description:
      "Profundiza en useState, useEffect y crea tus propios custom hooks.",
    level: "Intermedio",
  },
  {
    id: 3,
    icon: "📁",
    title: "Estado Global",
    description:
      "Gestiona el estado con Context API y aprende cuándo usarlo.",
    level: "Intermedio",
  },
  {
    id: 4,
    icon: "🚀",
    title: "React Avanzado",
    description:
      "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.",
    level: "Avanzado",
  },
];

function CoursesSection() {
  return (
    <section className="courses-section">
      <h2>Nuestros Cursos</h2>
      <p className="courses-subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="courses-grid">
        {cursos.map((curso) => (
          <CourseCard
            key={curso.id}
            icon={curso.icon}
            title={curso.title}
            description={curso.description}
            level={curso.level}
          />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;