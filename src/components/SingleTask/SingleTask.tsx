import React from 'react'
import {Task} from "../../model"

interface Props {
    task: Task
}

const SingleTask : React.FC<Props> = (props) => {
  return (
    <div>SingleTask</div>
  )
}

export default SingleTask