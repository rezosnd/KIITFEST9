import { useEffect, useState } from 'react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 0);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      id="scrollToTop"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`nes-btn is-error visible`}
      aria-label="Scroll to top"
      style={{ zIndex: 1301 }}
    >
      ↑
    </button>
  );
}
