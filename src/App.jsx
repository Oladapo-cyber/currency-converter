import Converter from "./components/Converter";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-[#163300] text-[#9fe870] p-500 flex flex-col gap-20 h-screen">
      <Header />
      <Converter />
    </div>
  );
}

export default App;
