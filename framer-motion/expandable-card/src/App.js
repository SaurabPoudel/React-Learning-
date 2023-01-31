import { motion, spring } from "framer-motion";
import { useState } from "react";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div
        // eslint-disable-next-line
        transition={{ layout: { duration: 1, type: "spring" } }}
        layout
        onClick={() => setIsOpen(!isOpen)}
        className="card"
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h2 layout="position">Framer Motion 🚀</motion.h2>
        {isOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{opacity:1}} transition={{duration: 1}} className="expand">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              suscipit perferendis qui magnam cupiditate sunt aliquid
              praesentium exercitationem voluptates quisquam.
            </p>
            <button>Hello</button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
