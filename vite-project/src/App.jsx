import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";

export function App() {
  function handleButtonClick() {
    const now = new Date();
    alert(now.toLocaleTimeString());
  }
  return (
    <div>
      <Hello />
      <Welcome name="John" age={17} />
      <AlertClock eventHandler={handleButtonClick} />
    </div>
  );
}
