import { Link } from "react-router-dom";
import { FaClock, FaBook, FaTasks } from "react-icons/fa";

function Home() {
  return (
    <div
      className="min-h-screen bg-[#051F45] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: "url('${bgimageforbp.png}')" }} 
    >
      
      <div className="flex-1 flex flex-col items-center justify-center px-4">

        <div className="backdrop-blur-md bg-[#F2C4CD]/30 px-8 py-10 rounded-3xl shadow-2xl max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#051F45] drop-shadow-md text-center font-sans">
            Welcome! <br/> What would you like to do today?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
            <Link
              to="/timer"
              className="px-6 py-3 rounded-xl bg-[#F2C4CD] text-[#051F45] font-medium shadow hover:bg-[#e8a6b8] transition"
            >
              <FaClock className="inline-block mr-2" /> Start Timer
            </Link>
            <Link
              to="/journal"
              className="px-6 py-3 rounded-xl bg-[#F2C4CD] text-[#051F45] font-medium shadow hover:bg-[#e8a6b8] transition"
            >
              <FaBook className="inline-block mr-2" /> Write Journal
            </Link>
            <Link
              to="/todos"
              className="px-6 py-3 rounded-xl bg-[#F2C4CD] text-[#051F45] font-medium shadow hover:bg-[#e8a6b8] transition"
            >
              <FaTasks className="inline-block mr-2" /> View Todo List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

