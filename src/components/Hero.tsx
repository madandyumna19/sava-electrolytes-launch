import { motion } from "framer-motion";
import sachetWatermelon from "@/assets/sachet-watermelon.png";
import sachetBerry from "@/assets/sachet-berry.png";
import sachetMango from "@/assets/sachet-mango.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Floating product images */}
      <motion.img
        src={sachetWatermelon}
        alt="Watermelon flavor"
        className="absolute left-[5%] top-[25%] w-32 md:w-48 opacity-60 blur-[1px]"
        initial={{ opacity: 0, y: 50, rotate: -15 }}
        animate={{ opacity: 0.6, y: 0, rotate: -15 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ animation: "float 5s ease-in-out infinite" }}
      />
      <motion.img
        src={sachetBerry}
        alt="Berry flavor"
        className="absolute right-[5%] top-[30%] w-32 md:w-48 opacity-60 blur-[1px]"
        initial={{ opacity: 0, y: 50, rotate: 15 }}
        animate={{ opacity: 0.6, y: 0, rotate: 15 }}
        transition={{ duration: 1, delay: 0.5 }}
        style={{ animation: "float 6s ease-in-out infinite 1s" }}
      />
      <motion.img
        src={sachetMango}
        alt="Mango flavor"
        className="absolute left-[15%] bottom-[15%] w-28 md:w-40 opacity-50 blur-[1px]"
        initial={{ opacity: 0, y: 50, rotate: -10 }}
        animate={{ opacity: 0.5, y: 0, rotate: -10 }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{ animation: "float 4.5s ease-in-out infinite 0.5s" }}
      />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-6"
        >
          Premium Electrolytes
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Hydrate.
          <br />
          <span className="text-gradient-watermelon">Perform.</span>
          <br />
          <span className="text-muted-foreground">Repeat.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Zero sugar. All the electrolytes. Three explosive flavors crafted for athletes who refuse to settle.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="px-8 py-4 text-base font-semibold bg-foreground text-background rounded-full hover:scale-105 transition-transform">
            Shop All Flavors
          </button>
          <button className="px-8 py-4 text-base font-medium text-foreground border border-border rounded-full hover:bg-secondary transition-colors">
            Learn More
          </button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-muted-foreground rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
