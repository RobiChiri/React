// import { Hello } from "./Hello";
// import { Welcome } from "./Welcome";
// import { AlertClock } from "./AlertClock";
// import { Counter } from "./Counter";
import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";
// import { MouseClicker } from "./MouseClicker";
// import { InteractiveWelcome } from "./InteractiveWelcome";
// import { Login } from "./Login";
// import { UncontrolledForm } from "./UncontrolledForm";
// import { FocusableInput } from "./FocusableInput";
// import { StrictModeComponent } from "./StrictModeComponent";
// import { StrictMode } from "react";
// import {Container} from "./Container"

// import { TodoList } from "./TodoList";

export function App() {
  // function handleButtonClick() {
  //   const now = new Date();
  //   alert(now.toLocaleTimeString());
  // }

  // function onLogin(data) {
  //   console.log(data);
  // }

  const[language, setLanguage]=useState("en")

  function handleSetLanguage(language){
    setLanguage(language)
    console.log(language)
  }
  return (
    <div>
      <select>
        <option onChange={() => handleSetLanguage("en")}>EN</option>
        <option onChange={() => handleSetLanguage("it")}>IT</option>
      </select>
      <LanguageContext.Provider value={language}>
        <Clock />
      </LanguageContext.Provider>
      {/* <Hello /> */}
      {/* <Welcome name="John" age={17} /> */}
      {/* <AlertClock eventHandler={handleButtonClick} /> */}

      {/* <MouseClicker />
      <InteractiveWelcome />
      <Login onLogin={onLogin} />
      <UncontrolledForm /> */}
      {/* <FocusableInput /> */}
      {/* <StrictMode>
        <StrictModeComponent />
      </StrictMode> */}
      {/* <TodoList /> */}
      {/* <Container title={"Container exercise title"}>
        <Counter initialValue={0} increment={1} decrement={1} />
      </Container> */}
    </div>
  );
}
