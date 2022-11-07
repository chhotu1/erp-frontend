import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomRoutes from './CustomRoutes';
import { store } from './store';
import axios from 'axios';
axios.defaults.baseURL=process.env.REACT_APP_API_URL;
function App() {
  return (
    <Provider store={store}>
      <Router>
        <CustomRoutes />
      </Router>
      <ToastContainer />
    </Provider>
  );
}

export default App;
