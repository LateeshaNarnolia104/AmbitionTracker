import { useState, useEffect } from "react";
import Icons from "./Icons";
import BackIcon from "./Backicon";

function Journal() {
  const [entry, setEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("journal");
    if (stored) setJournalEntries(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("journal", JSON.stringify(journalEntries));
  }, [journalEntries]);

  const addEntry = () => {
    if (!entry.trim()) return;
    const newEntry = { text: entry.trim(), date: new Date().toLocaleString() };
    setJournalEntries([...journalEntries, newEntry]);
    setEntry("");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start pt-24 pb-8 bg-[#051F45] text-[#F2C4CD]"
     style={{ backgroundImage: "url('bgforbp.png')" }} >
      <BackIcon />
      <Icons />

      <h1 className="text-4xl font-bold mb-4 text-[#051F45] drop-shadow-md">Journal</h1>

      <textarea
        value={entry}
        onChange={(e) => setEntry(e.target.value)}
        placeholder="Write your thoughts..."
        className="w-full max-w-lg p-3 mb-4 h-40 bg-[#F2C4CD]/40 text-[#051F45] border border-[#F2C4CD] rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-[#051F45] placeholder:text-[#051F45]/60 transition"
      ></textarea>

      <button
        onClick={addEntry}
        className="px-5 py-2 rounded-lg bg-[#F2C4CD]/40 text-[#051F45] font-semibold shadow hover:bg-[#e8a6b8] hover:text-[#051F45] transition mb-4"
      >
        Save Entry
      </button>

      <div className="w-full max-w-lg mt-4 overflow-y-auto">
        {journalEntries.map((e, i) => (
          <div
            key={i}
            className="bg-[#F2C4CD]/50 text-[#051F45] shadow p-4 rounded-lg mb-3 border border-[#e8a6b8]"
          >
            <p className="text-xs opacity-70 mb-1">{e.date}</p>
            <p className="text-lg">{e.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Journal;
