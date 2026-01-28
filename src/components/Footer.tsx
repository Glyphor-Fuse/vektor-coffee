import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background py-24 border-t border-primary/5">
      <div className="container mx-auto px-6">
        <div className="bauhaus-grid gap-y-12">
          <div className="col-span-12 md:col-span-4">
            <h5 className="text-2xl font-display font-bold mb-6">ETHOS</h5>
            <p className="text-muted max-w-xs mb-8">
              Bauhaus-inspired coffee roasting for the uncompromising professional.
            </p>
            <div className="flex gap-4">
              {['TW', 'IG', 'FB'].map(s => (
                <a key={s} href="#" className="w-10 h-10 border border-primary flex items-center justify-center text-xs hover:bg-primary hover:text-white transition-all">
                  {s}
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-6 md:col-span-2">
            <h6 className="font-mono text-xs font-bold uppercase mb-6 tracking-widest">Navigation</h6>
            <ul className="space-y-4 text-muted text-sm uppercase">
              <li><a href="#" className="hover:text-accent">Archive</a></li>
              <li><a href="#" className="hover:text-accent">Manifesto</a></li>
              <li><a href="#" className="hover:text-accent">Stockists</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <h6 className="font-mono text-xs font-bold uppercase mb-6 tracking-widest">Support</h6>
            <ul className="space-y-4 text-muted text-sm uppercase">
              <li><a href="#" className="hover:text-accent">Shipping</a></li>
              <li><a href="#" className="hover:text-accent">Returns</a></li>
              <li><a href="#" className="hover:text-accent">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-4 bg-primary text-white p-8">
             <h6 className="font-mono text-xs mb-6">INTEL_FEED</h6>
             <p className="text-xl mb-6">Subscribe for early access to small-batch extractions.</p>
             <div className="flex border-b border-white/30 pb-2">
               <input type="email" placeholder="EMAIL ADDRESS" className="bg-transparent outline-none w-full text-xs font-mono" />
               <button className="text-accent font-bold">JOIN</button>
             </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between text-[10px] font-mono text-muted uppercase tracking-[0.2em]">
          <span>© 2024 ETHOS ROASTERS GMBH</span>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span>Designed in Berlin</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
}