import { useTransition, animated } from "react-spring";

// Element fades in

function FadeIn({ isVisible, children }) {
  const fadeIn = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return <>{fadeIn((style, item) => (item ? <animated.div style={style}>{children}</animated.div> : ""))}</>;
}

export default FadeIn;
