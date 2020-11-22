import React from "react";
import Homepage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./Header";
import CoursesPage from './CoursesPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';

function App() {
    return (
        <div className="cointaner-fluid">
            <Header />
            <Switch>
                <Route path="/" exact component={Homepage}/> {/* ako ne stavimo exact će svaka ruta imati HomePage komponentu također */}
                <Route path="/about" component={AboutPage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Redirect from ="/about-page" to="/about" />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
}

export default App;