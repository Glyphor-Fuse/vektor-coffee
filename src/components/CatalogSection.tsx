import { motion } from "framer-motion";

const products = [
  { name: "MONOLITH-01", origin: "Ethiopia Yirgacheffe", price: "€24" },
  { name: "BRUTALIST-04", origin: "Sumatra Mandheling", price: "€28" },
  { name: "KINETIC-09", origin: "Colombia Huila", price: "€22" },
];

export function CatalogSection() {
  return (
    <section className="py-24 bg-primary text-secondary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <h3 className="text-6xl font-display font-bold tracking-tighter">THE CATALOG</h3>
          <p className="max-w-xs text-sm opacity-60 mt-4 md:mt-0">Monthly drops of precision-selected microlots. Limited availability. Guaranteed consistency.</p>
        </div>

        <div className="space-y-px">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ x: 20 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-b border-secondary/20 cursor-pointer"
            >
              <div>
                <span className="text-xs font-mono text-accent mb-2 block">BATCH_{i+102}</span>
                <h4 className="text-4xl md:text-6xl font-display font-bold group-hover:text-accent transition-colors">
                  {p.name}
                </h4>
              </div>
              <div className="flex items-center gap-24 mt-6 md:mt-0">
                <span className="text-xl opacity-60 uppercase">{p.origin}</span>
                <span className="text-3xl font-display">{p.price}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}