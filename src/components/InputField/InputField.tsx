import React, { useRef } from "react";
import s from "./inputField.module.scss";

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={s.inputField}>
      <div className={s.container}>
        <form
          className={s.form}
          onSubmit={(e) => {
            props.handleAdd(e);
            inputRef.current?.blur();
          }}
        >
          <input
            ref={inputRef}
            type="text"
            placeholder="Add a new task"
            className={s.input}
            value={props?.task}
            onChange={(e) => props?.setTask(e.target.value)}
          />
          <button className={s.submit} type="submit">
            Go
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputField;
