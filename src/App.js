import './App.css';
import CakeContainer from './component/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import HookCakeConatiner from './component/HookCakeContainer';
import IceCreameContainer from './component/IceCreameContainer';
import CookieContainer from './component/CookieContainer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <CakeContainer/>
      <HookCakeConatiner/>
      <IceCreameContainer/>
      <CookieContainer/>
    </div>
    </Provider>
  );
}

export default App;
