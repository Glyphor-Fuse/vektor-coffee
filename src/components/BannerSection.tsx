import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Orb } from "@/components/ui/orb";

export function BannerSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-6 bauhaus-grid">
        <div className="col-span-12 md:col-span-7 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[clamp(3rem,10vw,8rem)] leading-[0.85] font-display font-black uppercase mb-8">
              Cold Steel.<br />
              <span className="text-accent">Warm Extraction.</span>
            </h2>
            <div className="max-w-md">
              <p className="text-muted text-lg mb-8 border-l-4 border-primary pl-6">
                Redefining coffee through the lens of industrial functionalism. 
                Where engineering meets the ritual of the morning brew.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-white px-10 py-5 flex items-center gap-4 uppercase tracking-[0.2em] font-bold"
              >
                Explore Apparatus <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="col-span-12 md:col-span-5 relative mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative aspect-[4/5] bg-secondary p-4"
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent z-20" />
            <div className="w-full h-full relative overflow-hidden">
              ///IMG:minimalist espresso machine on brushed steel|portrait|editorial///
            </div>
          </motion.div>
          <Orb className="top-1/4 -right-20" color="hsl(var(--accent))" />
        </div>
      </div>
      
      {/* Decorative Bauhaus Elements */}
      <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-primary" />
      <div className="absolute top-0 right-[20%] w-[1px] h-full bg-border/50" />
    </section>
  );
}