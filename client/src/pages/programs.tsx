import { useEffect, useState } from "react";
interface Program {
  id: number;
  title: string;
  poster: string;
}
const program = () => {
  const [programs, setPrograms] = useState([] as Program[]); // Ajout du state
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/categories`)
      .then((response) => response.json())
      .then((data: Program[]) => {
        setPrograms(data);
      });
  }, []);
  return (
    <div>
      <h1>Program</h1>
      {}
      {programs.map((program) => (
        <div key={program.id}>
          <h2>{program.title}</h2>
          <img src={program.poster} alt={program.title} />
        </div>
      ))}
    </div>
  );
};
export default program;
