import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary text-secondary p-10">
      <div className="text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-display font-bold mb-4"
        >
          404
        </motion.h1>
        <p className="text-xl mb-8 font-mono">SYSTEM_ERROR: ROUTE_NOT_FOUND</p>
        <Link to="/" className="inline-block px-8 py-4 border border-secondary hover:bg-secondary hover:text-primary transition-colors">
          RETURN TO ORIGIN
        </Link>
      </div>
    </div>
  );
}