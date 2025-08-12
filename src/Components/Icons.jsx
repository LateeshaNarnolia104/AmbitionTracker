import { Link } from "react-router-dom";
import { FaClock, FaBook, FaTasks } from "react-icons/fa";

function Icons() {
  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 flex flex-col gap-6 z-20">
      <Link to="/timer" title="Timer">
        <FaClock className="text-3xl text-[#F2C4CD] bg-[#051F45] rounded-full hover:text-[#051F45] hover:bg-[#F2C4CD] transitionrounded-full p-2 " />
      </Link>
      <Link to="/journal" title="Journal">
        <FaBook className="text-3xl text-[#F2C4CD] bg-[#051F45] rounded-full hover:text-[#051F45] hover:bg-[#F2C4CD] transitionrounded-full p-2 " />
      </Link>
      <Link to="/todos" title="Todo List">
        <FaTasks className="text-3xl text-[#F2C4CD] bg-[#051F45] rounded-full hover:text-[#051F45] hover:bg-[#F2C4CD] transitionrounded-full p-2 " />
      </Link>
    </div>
  );
}

export default Icons;
