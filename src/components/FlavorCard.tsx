import { motion } from "framer-motion";

interface FlavorCardProps {
  name: string;
  description: string;
  image: string;
  flavor: "watermelon" | "berry" | "mango";
  index: number;
}

const flavorStyles = {
  watermelon: {
    gradient: "bg-gradient-watermelon",
    shadow: "shadow-watermelon",
    textGradient: "text-gradient-watermelon",
  },
  berry: {
    gradient: "bg-gradient-berry",
    shadow: "shadow-berry",
    textGradient: "text-gradient-berry",
  },
  mango: {
    gradient: "bg-gradient-mango",
    shadow: "shadow-mango",
    textGradient: "text-gradient-mango",
  },
};

const FlavorCard = ({ name, description, image, flavor, index }: FlavorCardProps) => {
  const styles = flavorStyles[flavor];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className={`absolute inset-0 ${styles.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500 blur-xl`} />
      
      <div className="relative bg-card border border-border rounded-2xl p-6 hover:border-muted-foreground/30 transition-all duration-300">
        <div className="aspect-square mb-6 flex items-center justify-center overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
            whileHover={{ rotate: 5 }}
          />
        </div>
        
        <h3 className={`text-2xl font-bold mb-2 ${styles.textGradient}`}>
          {name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>
        
        <button className={`w-full py-3 rounded-full font-medium text-sm ${styles.gradient} text-background hover:opacity-90 transition-opacity`}>
          Add to Cart — $24
        </button>
      </div>
    </motion.div>
  );
};

export default FlavorCard;
