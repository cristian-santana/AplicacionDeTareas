import React, { useState } from "react";
import {PolaRow} from './components/PolaRow';
import {PolaBanner} from './components/PolaBanner';
import { PolaCreator } from './components/PolaCreator';
import {VisibilityControl} from './components/VisibilityControl';



 
function App() {

  const [userName, setUserName] = useState('pola');
  const [taskItems, settaskItems] = useState([
    {name:'task One', done: false},
    {name:'task two', done: false},
    {name:'task Three', done: true},
    {name:'task Four', done: false},
  ])

  const [showCompleted, setShowCompleted] = useState(true)

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      settaskItems([...taskItems, {name:taskName, done: false}])
    }
  }

    const toggleTask = task =>
       settaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

     const taskTableRows = (doneValue) =>
      taskItems
      .filter(task => task.done === doneValue)
      .map(task =>(
      <PolaRow task={task} key={task.name}  toggleTask={toggleTask} />
    ))

  return (
    <div>
       <PolaBanner userName={userName} taskItems={taskItems} />
       <PolaCreator callback={createNewTask} />
      <table className="table table-striped table-bordered">
     <thead>
     <tr>
        <th>Description</th>
        <th>Done</th>
      </tr>
     </thead>
     
     <tbody>
       {taskTableRows(false)}
     </tbody>
     </table>

     <div className="bg-secondary-text-white text-center p-2">
          <VisibilityControl
            description="Completed Tasks"
            isChecked={showCompleted}
            callback={checked =>  setShowCompleted(checked)}
          />
     </div>
        {
          showCompleted && (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Done</th>
                </tr>
              </thead>
              <tboby>
                {taskTableRows(true)}
              </tboby>
            </table>
          )
        }
    </div>
  );
}

export default App;
