import { useTransition, animated } from "react-spring";

// Slides from left to right

function SlideFromLeft({ isVisible, children }) {
  const slideFromLeft = useTransition(isVisible, {
    from: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: 100, opacity: 0 },
  });

  return <>{slideFromLeft((style, item) => (item ? <animated.div style={style}>{children}</animated.div> : ""))}</>;
}

export default SlideFromLeft;
