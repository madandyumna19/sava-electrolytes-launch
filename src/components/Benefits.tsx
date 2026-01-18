import { motion } from "framer-motion";
import { Zap, Droplets, Leaf, Activity } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Instant Energy",
    description: "Optimal electrolyte blend for rapid absorption and sustained performance.",
  },
  {
    icon: Droplets,
    title: "Zero Sugar",
    description: "Clean hydration without the crash. No artificial sweeteners or junk.",
  },
  {
    icon: Leaf,
    title: "Clean Ingredients",
    description: "Only what you need. Nothing you don't. Simple, effective, transparent.",
  },
  {
    icon: Activity,
    title: "Peak Performance",
    description: "Trusted by athletes. Perfect for training, recovery, and everyday life.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">
            Why Sava
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient-mango">Performance</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-card border border-border flex items-center justify-center group-hover:border-muted-foreground/50 transition-colors">
                <benefit.icon className="w-7 h-7 text-foreground" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
