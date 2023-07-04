import AppTabBar from "./components/AppTabBar/AppTabBar";
import AppRoutes from "./router/AppRoutes";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppRoutes></AppRoutes>
      <AppTabBar></AppTabBar>
    </div>
  );
}

export default App;
