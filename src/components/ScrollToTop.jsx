import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useLayoutEffect(() => {
        let timeoutId;

        const scrollToHash = () => {
            const target = document.getElementById(hash.slice(1));

            if (!target) return false;

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            return true;
        };

        if (hash) {
            const frameId = window.requestAnimationFrame(() => {
                if (!scrollToHash()) {
                    timeoutId = window.setTimeout(scrollToHash, 350);
                }
            });

            return () => {
                window.cancelAnimationFrame(frameId);
                if (timeoutId) window.clearTimeout(timeoutId);
            };
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash]);

    return null;
}

export default ScrollToTop;

export { ScrollToTop };
