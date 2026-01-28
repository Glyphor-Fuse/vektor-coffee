import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-40 bg-background border-y border-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div
          whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-6xl md:text-9xl mb-12">RECLAIM<br/><span className="text-accent italic font-light">BALANCE</span></h2>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary))" }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 bg-accent text-white px-12 py-6 text-xl font-black uppercase tracking-widest transition-all"
          >
            Initialize Connection
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
