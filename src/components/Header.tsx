import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-foreground">
          SAVA
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#flavors" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Flavors
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Benefits
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>
        <button className="px-5 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:opacity-90 transition-opacity">
          Shop Now
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
