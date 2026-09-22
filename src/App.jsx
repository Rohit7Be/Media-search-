import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import Navbar from "./components/Navbar";
import Credits from "./components/Credits";

const App = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Routes>
      </main>
      <Credits />
    </div>
  );
};

export default App;
