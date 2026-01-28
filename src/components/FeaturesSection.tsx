import { motion } from "framer-motion";
import { Terminal, Cpu, Layers, Maximize } from "lucide-react";

const features = [
  { title: "Functional Modularism", icon: Layers, desc: "Building blocks designed for peak performance and infinite scalability." },
  { title: "Industrial Core", icon: Cpu, desc: "A robust engine powered by modern frameworks and minimal overhead." },
  { title: "Precision Syntax", icon: Terminal, desc: "Code that reflects the clarity of a blueprint. Every line matters." },
  { title: "Spatial Integrity", icon: Maximize, desc: "Maintaining the balance between void and structure across all displays." }
];

export function FeaturesSection() {
  return (
    <section id="systems" className="py-24 bg-primary text-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-secondary/20">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 border-r border-b border-secondary/20 hover:bg-accent transition-colors duration-500 group"
            >
              <f.icon className="mb-8 w-12 h-12 text-accent group-hover:text-white transition-colors" />
              <h3 className="text-2xl mb-4 group-hover:translate-x-2 transition-transform">{f.title}</h3>
              <p className="font-mono text-sm opacity-60 group-hover:opacity-100">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
