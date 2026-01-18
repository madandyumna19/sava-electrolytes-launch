import { motion } from "framer-motion";
import FlavorCard from "./FlavorCard";
import sachetWatermelon from "@/assets/sachet-watermelon.png";
import sachetBerry from "@/assets/sachet-berry.png";
import sachetMango from "@/assets/sachet-mango.png";

const flavors = [
  {
    name: "Watermelon",
    description: "Crisp, refreshing, and bursting with summer vibes. Perfect for hot days and intense workouts.",
    image: sachetWatermelon,
    flavor: "watermelon" as const,
  },
  {
    name: "Berry Burst",
    description: "A bold mix of wild berries that packs a punch. Sweet, tangy, and endlessly drinkable.",
    image: sachetBerry,
    flavor: "berry" as const,
  },
  {
    name: "Mango Passionfruit",
    description: "Tropical paradise in every sip. Exotic mango meets zesty passionfruit for pure refreshment.",
    image: sachetMango,
    flavor: "mango" as const,
  },
];

const Flavors = () => {
  return (
    <section id="flavors" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-muted-foreground text-sm uppercase tracking-[0.3em] mb-4">
            Find Your Flavor
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Three Ways to <span className="text-gradient-berry">Hydrate</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {flavors.map((flavor, index) => (
            <FlavorCard key={flavor.name} {...flavor} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;
