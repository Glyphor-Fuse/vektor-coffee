import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section className="py-24 overflow-hidden" id="process">
      <div className="container mx-auto px-6">
        <div className="bauhaus-grid items-center">
          <div className="col-span-12 md:col-span-6 relative">
             <motion.div 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               className="aspect-square bg-primary p-12 relative"
             >
                <div className="absolute inset-0 grayscale contrast-125 opacity-70">
                  ///IMG:pour over coffee process macro|square|editorial///
                </div>
                <div className="relative z-10 border border-white/20 h-full w-full flex items-center justify-center">
                  <span className="text-white font-display text-8xl font-black">72%</span>
                </div>
             </motion.div>
          </div>
          
          <div className="col-span-12 md:col-span-6 md:pl-20 mt-12 md:mt-0">
            <motion.h3 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-5xl font-display font-bold mb-8 uppercase"
            >
              The Science of<br />Simplicity.
            </motion.h3>
            <div className="space-y-6 text-muted">
              <p>We strip away the decorative. We focus on the molecular. Every bean is analyzed for density, moisture content, and cellular structure before entering our fluid-bed roaster.</p>
              <ul className="space-y-4 font-mono text-sm">
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" /> ROAST PROFILE: LINEAR ANALOG
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" /> COOLING: RAPID INDUCTION
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-accent" /> PACKAGING: NITROGEN SEALED
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}