import { Outlet } from "react-router-dom";
import Header from "../src/components/header";
import Footer from "../src/components/footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
