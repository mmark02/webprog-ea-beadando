import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Stopper from './pages/stopper.jsx';
import ToDoList from './pages/todolist.jsx';

function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/stopper">Stopper</Link>
            </li>
            <li>
              <Link to="/todolist">Jegyzettömb</Link>
            </li>
            <li>
              <a href="https://demoserver.hu/">Főoldal</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/stopper' element={<Stopper />} />
          <Route path='/todolist' element={<ToDoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;