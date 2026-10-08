import expertsData from "../data/expertsData";
import Expert from "./Expert";

function Experts() {
  return (
    <ul>
      {expertsData.map((expert) => (
        <Expert
          key={expert.id}
          expert={expert}
        />
      ))}
    </ul>
  );
}

export default Experts;