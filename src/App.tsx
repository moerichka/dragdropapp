import React from "react";
import s from "./App.module.scss";

import InputField from "./components/InputField"

const App: React.FC = () => {
  return (
    <div className={s.app}>
      <header className={s.header}>
        <div className={s.headercontainer}>
          <h1 className={s.headertitle}>CoolTaskManager</h1>
        </div>
      </header>
      <main className={s.main}>
        <section className={s.firstsection}>
          <InputField />
        </section>
      </main>
    </div>
  );
};

export default App;
