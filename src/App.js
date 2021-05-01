import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import LandingPage from './LandingPage.js';
import CourseDetail from './CourseDetail.js';
import Error from './Error.js';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/course-detail/:courseId">
          <CourseDetail />
        </Route>
        <Route path="/error">
          <Error message="Something went wrong" />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
