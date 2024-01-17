import "./App.css";
import Auth from "./pages/Auth";
import AllRoutes from "./routes/AllRoutes";
import {GlobalStateProvider} from './context/ContextProvider';
function App() {
  return (
    <div className="row m-0 justify-content-center">
      <div className="col-lg-4 p-0 col-md-6 col-12 ">
        <GlobalStateProvider>
          {localStorage.getItem("the_run_machine_user") == null ? <Auth /> : <AllRoutes />}
        </GlobalStateProvider>
      </div>
    </div>
  );
}

export default App;
