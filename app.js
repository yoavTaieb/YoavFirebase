import { AuthProvider } from "Providers/AuthProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "Routes/PrivateRoute";
import Signup from "Screens/Auth/Signup";
import Mapping from "Screens/Mapping";
import ProjectDetails from "Screens/Project/ProjectDetails";
import ProjectPage from "Screens/Project/ProjectMain";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/auth" component={Signup} />
            <Route exact path="/o/:linkID" component={Mapping} />
            <PrivateRoute exact path="/project/:projectID" component={ProjectDetails} />
            <PrivateRoute exact path="/" component={ProjectPage} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
