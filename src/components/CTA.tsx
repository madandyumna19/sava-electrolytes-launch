import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-berry opacity-20 blur-3xl rounded-full" />
          
          <div className="relative bg-card border border-border rounded-3xl p-12 md:p-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="text-gradient-watermelon">Elevate</span> Your Hydration?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join thousands of athletes who've made the switch to Sava. Your body will thank you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 text-base font-semibold bg-gradient-watermelon text-background rounded-full hover:scale-105 transition-transform shadow-watermelon">
                Get Started — $24/pack
              </button>
              <span className="text-muted-foreground text-sm">
                Free shipping on orders over $50
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
