import { motion } from "framer-motion";

const features = [
  {
    title: "STRUCTURE",
    desc: "Built on the principles of Bauhaus architecture, our roasting facility optimizes thermal dynamics.",
    img: "///IMG:industrial architecture detail|square|monochrome///"
  },
  {
    title: "PRECISION",
    desc: "Laser-focused extraction metrics. 18.5g in, 37g out, 27 seconds. No deviations.",
    img: "///IMG:mechanical coffee scales detail|square|monochrome///"
  },
  {
    title: "MATERIAL",
    desc: "Smoked glass, surgical steel, and ethically sourced heirloom grains.",
    img: "///IMG:coffee beans on steel plate|square|monochrome///"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16 border-b border-primary/10 pb-8">
          <h3 className="text-4xl font-display font-bold">CORE PRINCIPLES</h3>
          <span className="text-sm font-mono text-muted">VOL 01 // 2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-primary/10 p-10 hover:bg-white transition-colors group relative overflow-hidden"
            >
              <div className="mb-8 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                {f.img}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4 tracking-tighter">{f.title}</h4>
              <p className="text-muted leading-relaxed">{f.desc}</p>
              <div className="absolute bottom-4 right-4 text-primary/10 font-mono text-6xl select-none">
                0{i + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}