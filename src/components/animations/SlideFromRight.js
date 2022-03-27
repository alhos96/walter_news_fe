import { useTransition, animated } from "react-spring";

// Slides from right to left

function SlideFromRight({ isVisible, children }) {
  const slideFromRight = useTransition(isVisible, {
    from: { x: -100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    leave: { x: -100, opacity: 0 },
  });

  return <>{slideFromRight((style, item) => (item ? <animated.div style={style}>{children}</animated.div> : ""))}</>;
}

export default SlideFromRight;
