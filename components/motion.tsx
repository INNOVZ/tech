"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  type BezierDefinition,
  type Variants,
  type HTMLMotionProps,
} from "framer-motion";
import { createElement, type ReactNode, useRef } from "react";

/* ------------------------------------------------------------------ */
/*  Shared defaults                                                    */
/* ------------------------------------------------------------------ */

const EASE: BezierDefinition = [0.2, 0.75, 0.25, 1]; // matches --ease-fluid
const DURATION = 0.6;
const VIEWPORT = { once: false, margin: "-80px" } as const;

/* ------------------------------------------------------------------ */
/*  FadeIn                                                             */
/* ------------------------------------------------------------------ */

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /** Set to "x" for a horizontal slide, default is "y" (vertical). */
  direction?: "x" | "y";
  /** Distance in px the element travels. Default 20. */
  distance?: number;
  as?: "div" | "section" | "li" | "p" | "span" | "footer";
} & Omit<HTMLMotionProps<"div">, "children">;

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = DURATION,
  direction = "y",
  distance = 20,
  as = "div",
  ...rest
}: FadeInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, [direction]: distance }}
      whileInView={{ opacity: 1, [direction]: 0 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  ScaleIn  –  subtle scale entrance (hero image, decorative rings)   */
/* ------------------------------------------------------------------ */

type ScaleInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: number;
};

export function ScaleIn({
  children,
  className,
  delay = 0,
  duration = 0.8,
  from = 0.94,
}: ScaleInProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Stagger container + item                                           */
/* ------------------------------------------------------------------ */

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE },
  },
};

type StaggerContainerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  as?: "div" | "ol" | "ul" | "dl";
} & Omit<HTMLMotionProps<"div">, "children">;

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  as = "div",
  ...rest
}: StaggerContainerProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const variants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
  };

  const Component = motion[as] as typeof motion.div;

  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      {...rest}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
} & Omit<HTMLMotionProps<"div">, "children">;

export function StaggerItem({
  children,
  className,
  as = "div",
  ...rest
}: StaggerItemProps) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component className={className} variants={staggerItemVariants} {...rest}>
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  ScrollParallax                                                     */
/* ------------------------------------------------------------------ */

type ScrollParallaxProps = {
  children: ReactNode;
  className?: string;
  offset?: number;
  as?: "div" | "section" | "header";
};

export function ScrollParallax({
  children,
  className,
  offset = 150,
  as = "div",
}: ScrollParallaxProps) {
  const shouldReduce = useReducedMotion();
  const { scrollY } = useScroll();
  const yVal = useTransform(scrollY, [0, 1000], [0, offset]);
  const y = useSpring(yVal, { stiffness: 80, damping: 30, restDelta: 0.001 });
  
  const opacityVal = useTransform(scrollY, [0, 800], [1, 0]);
  const opacity = useSpring(opacityVal, { stiffness: 80, damping: 30, restDelta: 0.001 });

  if (shouldReduce) {
    return createElement(as, { className }, children);
  }

  const Component = motion[as] as typeof motion.div;

  return (
    <Component className={className} style={{ y, opacity }}>
      {children}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  LetterReveal                                                       */
/* ------------------------------------------------------------------ */

type LetterRevealProps = {
  children: string;
  className?: string;
  delay?: number;
  as?: any;
};

export function LetterReveal({ children, className, delay = 0, as = "p" }: LetterRevealProps) {
  const shouldReduce = useReducedMotion();
  if (shouldReduce || typeof children !== "string") {
    return createElement(as, { className }, children);
  }

  const words = children.split(/\s+/).filter(Boolean);
  const Component = (motion[as as keyof typeof motion] || motion.p) as typeof motion.div;

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.015, delayChildren: delay } }
      }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block overflow-hidden mr-[0.25em] align-bottom pb-1">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              className="inline-block"
              variants={{
                hidden: { y: "100%", opacity: 0, rotateZ: 5 },
                visible: { y: 0, opacity: 1, rotateZ: 0, transition: { duration: 0.4, ease: EASE } }
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </Component>
  );
}

/* ------------------------------------------------------------------ */
/*  ScrollScrubReveal                                                  */
/* ------------------------------------------------------------------ */

type ScrollScrubRevealProps = {
  children: string;
  className?: string;
  as?: any;
};

export function ScrollScrubReveal({ children, className, as = "p" }: ScrollScrubRevealProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 90%", "end 60%"],
  });

  const shouldReduce = useReducedMotion();
  if (shouldReduce || typeof children !== "string") {
    return createElement(as, { className }, children);
  }

  const words = children.split(/\s+/).filter(Boolean);
  const Component = (motion[as as keyof typeof motion] || motion.p) as typeof motion.div;

  return (
    <Component className={className} ref={containerRef as any}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        // We use a slight overlap for smoother transitions
        const opacity = useTransform(scrollYProgress, [Math.max(0, start - 0.1), end], [0.15, 1]);

        return (
          <span key={i} className="inline-block mr-[0.25em]">
            <motion.span className="inline-block" style={{ opacity }}>
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}

