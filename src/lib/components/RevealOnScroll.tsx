import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  offsetY?: number;
  once?: boolean;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  delay = 0.3,
  duration = 1.2,
  offsetY = 30,
  once = true,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: offsetY },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default RevealOnScroll;
