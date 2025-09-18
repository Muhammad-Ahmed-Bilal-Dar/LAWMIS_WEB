// Shared animation variants and constants for all components
export const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

export const cardHover = {
  whileHover: { scale: 1.04, boxShadow: "0 8px 32px rgba(26,62,123,0.13)" },
  transition: { type: "spring", stiffness: 300 },
};

export const btnHover = {
  whileHover: { scale: 1.06, boxShadow: "0 4px 16px #1a8ed1aa" },
  transition: { type: "spring", stiffness: 300 },
};

export const imgHover = {
  whileHover: { scale: 1.08 },
  transition: { type: "spring", stiffness: 300 },
};

export const dotAnim = (active) => ({
  animate: {
    scale: active ? 1.2 : 1,
    background: active ? "#1a8ed1" : "rgba(255,255,255,0.5)",
  },
  transition: { type: "spring", stiffness: 300 },
});
