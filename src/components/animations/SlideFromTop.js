import { useTransition, animated } from "react-spring";

// Slides from top down

function SlideFromTop({ isVisible, children }) {
  const slideFromTop = useTransition(isVisible, {
    from: { y: -100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
    leave: { y: -100, opacity: 0 },
  });

  return <>{slideFromTop((style, item) => (item ? <animated.div style={style}>{children}</animated.div> : ""))}</>;
}

export default SlideFromTop;
