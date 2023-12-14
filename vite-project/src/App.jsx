// import { Hello } from "./Hello";
import { Welcome } from "./Welcome";
// import { AlertClock } from "./AlertClock";
// import { Counter } from "./Counter";
// import { Clock } from "./Clock";
// import { MouseClicker } from "./MouseClicker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledForm } from "./UncontrolledForm";
// import { FocusableInput } from "./FocusableInput";
// import { StrictModeComponent } from "./StrictModeComponent";
// import { StrictMode } from "react";

// import { TodoList } from "./TodoList";

export function App() {
  // function handleButtonClick() {
  //   const now = new Date();
  //   alert(now.toLocaleTimeString());
  // }

  // function onLogin(data) {
  //   console.log(data);
  // }
  return (
    <div>
      {/* <Hello /> */}
      <Welcome name="John" age={17} />
      {/* <AlertClock eventHandler={handleButtonClick} /> */}
      {/* <Counter initialValue={0} increment={1} decrement={1} /> */}
      {/* <Clock />
      <MouseClicker />
      <InteractiveWelcome />
      <Login onLogin={onLogin} />
      <UncontrolledForm /> */}
      {/* <FocusableInput /> */}
      {/* <StrictMode>
        <StrictModeComponent />
      </StrictMode> */}
      {/* <TodoList /> */}
    </div>
  );
}
