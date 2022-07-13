import React from 'react'
import s from "./inputField.module.scss"

const InputField : React.FC = () => {
  return (
    <div className={s.inputField}>
        <div className={s.container}>
            <form className={s.form}>
                <input type="text" placeholder='Add a new task' className={s.input} />
                <button className={s.submit} type="submit">Go</button>
            </form>
        </div>
    </div>
  )
}

export default InputField