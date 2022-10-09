import { BrowserRouter as Router } from 'react-router-dom';

import { Header, Footer, SideNavbar } from './Components/Layout';
import {Dashboard} from './Components'
import CustomRoutes from './CustomRoutes';

function App() {
  return (
    <Router>
        <CustomRoutes/>
    </Router>
  );
}

export default App;
