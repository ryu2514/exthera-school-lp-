import { useEffect, useState, useRef } from 'react';

export const useScrollAnimation = (threshold = 0.3) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [threshold]);

    return [ref, isVisible];
};

export const AnimatedTitle = ({ children, className = '', style = {} }) => {
    const [ref, isVisible] = useScrollAnimation(0.3);

    const containerStyle = {
        position: 'relative',
        display: 'inline-block',
        paddingBottom: '8px',
        ...style,
    };

    const underlineStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        height: '4px',
        background: 'linear-gradient(90deg, #2563eb 0%, #60a5fa 100%)',
        borderRadius: '2px',
        width: isVisible ? '100%' : '0%',
        transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    };

    return (
        <span ref={ref} style={containerStyle} className={className}>
            {children}
            <span style={underlineStyle} />
        </span>
    );
};
