import { motion } from "framer-motion";
import { useState } from "react";

export default function PackAnimation({ onOpen }) {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened(true);

    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div style={{ textAlign: "center" }}>
      {!opened && (
        <motion.div
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          onClick={handleClick}
          style={{
            width: "200px",
            height: "300px",
            background: "purple",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          <h2>OPEN PACK</h2>
        </motion.div>
      )}

      {opened && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 2 }}
          transition={{ duration: 0.5 }}
          style={{
            width: "200px",
            height: "300px",
            background: "yellow",
          }}
        />
      )}
    </div>
  );
}
