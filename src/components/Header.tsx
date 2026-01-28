import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <nav className="flex justify-between items-center p-6 md:p-10">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-white"
        >
          KONTUR<span className="text-accent">.</span>
        </motion.div>

        <div className="hidden md:flex gap-12 text-white/80 font-mono text-sm uppercase tracking-widest">
          {["Vision", "Systems", "Components", "Interface"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ color: "#ffffff", x: 5 }}
              className="cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
      
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-primary flex flex-col items-center justify-center gap-8 text-4xl font-black text-white"
        >
          {["Vision", "Systems", "Components", "Interface"].map((item) => (
            <a key={item} href="#" onClick={() => setIsOpen(false)}>{item}</a>
          ))}
        </motion.div>
      )}
    </header>
  );
}
