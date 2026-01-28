import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background p-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-9xl font-black text-primary mb-4"
      >
        404
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl text-muted mb-8 uppercase tracking-widest font-mono"
      >
        System Error: Void Reached
      </motion.p>
      <motion.div
        whileHover={{ x: -10 }}
      >
        <Link to="/" className="flex items-center gap-2 bg-accent text-white px-8 py-4 font-bold uppercase tracking-tighter">
          <ArrowLeft size={20} />
          Return to Foundation
        </Link>
      </motion.div>
    </div>
  );
}
