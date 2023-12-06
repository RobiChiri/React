import { Hello } from "./Hello";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <div>
      <Hello />
      <Welcome name={<strong>Robi</strong>} />
    </div>
  );
}
