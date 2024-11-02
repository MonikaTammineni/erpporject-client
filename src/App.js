import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Courses from './components/Courses';
import StudentTable from './components/StudentTable';
import MenuBar from './components/MenuBar';
import Card from './components/card';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Schedule from './components/Schedule';
import ProfileCards from './components/ProfileCards';
import Survey from './components/survey';
import Results from './components/results';
import Awards from './components/awards';
import ServerApp from './components/ServerApp';


function App() {
  return (
    <div className="App">
      <MenuBar/>
      <Routes>
        <Route path="/survey" element={<Survey />} />
        <Route path="/results" element={<Results />} />
        <Route path="/awards" element={<Awards />} />
      </Routes>
      <ServerApp/>
      <h2><u>github stuff</u></h2>
      <ProfileCards/>
      <Schedule/>
      <h2><u>FACULTY</u></h2>
      <Faculty/>
      <h2><u>STUDENTS</u> </h2>
      <StudentTable/>
      <h2><u>COURSES</u></h2>
      <Courses/>
      <Card/>
      <Footer/>
    </div>
    
  );
}

export default App;
