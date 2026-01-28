import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-secondary/20 pb-12 mb-12">
          <div className="mb-12 md:mb-0">
            <h3 className="text-4xl text-white mb-6">KONTUR</h3>
            <p className="max-w-xs font-mono text-sm opacity-60">
              The digital translation of industrial minimalism. Designed for those who demand structural integrity.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-20">
            <div>
              <p className="font-bold text-white uppercase mb-4 tracking-widest">Protocol</p>
              <ul className="space-y-2 font-mono text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Systems</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Manifesto</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white uppercase mb-4 tracking-widest">Network</p>
              <ul className="space-y-2 font-mono text-sm">
                <li><a href="#" className="hover:text-accent transition-colors">Terminal</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Source</a></li>
                <li><a href="#" className="hover:text-accent transition-colors">Registry</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em]">
          <p>© 2024 KONTUR INDUSTRIAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <motion.span whileHover={{ color: "#ffffff" }} className="cursor-pointer">PRC-492.00</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }} className="cursor-pointer">LAT-42.33</motion.span>
            <motion.span whileHover={{ color: "#ffffff" }} className="cursor-pointer">OS-1.0.4</motion.span>
          </div>
        </div>
      </div>
    </footer>
  );
}
