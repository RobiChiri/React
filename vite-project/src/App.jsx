import { Hello } from "./Hello";
// import { Welcome } from "./Welcome";
import { AlertClock } from "./AlertClock";
import { Counter } from "./Counter";
import { Clock } from "./Clock";
import { MouseClicker } from "./MouseClicker";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";

export function App() {
  function handleButtonClick() {
    const now = new Date();
    alert(now.toLocaleTimeString());
  }

  function onLogin(data) {
    console.log(data);
  }
  return (
    <div>
      <Hello />
      {/* <Welcome name="John" age={17} /> */}
      <AlertClock eventHandler={handleButtonClick} />
      <Counter initialValue={0} increment={3} decrement={2} />
      <Clock />
      <MouseClicker />
      <InteractiveWelcome />
      <Login onLogin={onLogin} />
    </div>
  );
}
