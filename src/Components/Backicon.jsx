import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function BackIcon() {
  const navigate = useNavigate();
  return (
    <button
      className="fixed top-8 left-6 z-20 text-3xl  text-[#F2C4CD] bg-[#051F45] rounded-full p-2 shadow hover:text-[#051F45] hover:bg-[#F2C4CD] transition"
      onClick={() => navigate("/")}
      title="Back to Home"
      aria-label="Back to Home"
    >
      <FaArrowLeft />
    </button>
  );
}

export default BackIcon;
