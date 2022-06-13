import { AppProvider } from "./context/AppContext";
import Layout from "./layout/Layout";

function App() {
  return (
    <AppProvider>
      <div className="app w-full h-full">
        <Layout></Layout>
      </div>
    </AppProvider>
  );
}

export default App;
