import { motion } from "framer-motion";
import { Menu, Search, ShoppingBag } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white px-6 py-8 flex justify-between items-end border-b border-white/10"
    >
      <div className="flex flex-col">
        <span className="text-xs font-mono tracking-widest uppercase mb-1">Berlin // Seattle</span>
        <h1 className="text-3xl font-display font-bold tracking-tighter">ETHOS</h1>
      </div>
      
      <nav className="hidden md:flex gap-12 text-sm uppercase tracking-widest">
        <a href="#roasts" className="hover:text-accent transition-colors">Precision Roasts</a>
        <a href="#process" className="hover:text-accent transition-colors">The Method</a>
        <a href="#equipment" className="hover:text-accent transition-colors">Apparatus</a>
      </nav>

      <div className="flex gap-6">
        <Search className="w-5 h-5 cursor-pointer" />
        <ShoppingBag className="w-5 h-5 cursor-pointer" />
        <Menu className="w-5 h-5 cursor-pointer md:hidden" />
      </div>
    </motion.header>
  );
}