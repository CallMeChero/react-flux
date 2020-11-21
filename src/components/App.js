import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import CoursesPage from './CoursesPage';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className="cointaner-fluid">
            <Header />
            <Route path="/" exact component={Homepage}/> {/* ako ne stavimo exact će svaka ruta imati HomePage komponentu također */}
            <Route path="/about" component={AboutPage}/>
            <Route path="/courses" component={CoursesPage}/>
        </div>
    );
}

export default App;