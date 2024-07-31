import React, { useEffect, useRef } from 'react';
import { Box, keyframes, styled } from '@mui/material';

const StyledBox = styled(Box)(() => ({
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
}));

interface AnimatedContainerProps {
    duration: number;
    direction: 'left' | 'right';
    speed: number;
}

const AnimatedContainer = styled(Box)<AnimatedContainerProps>(({ duration, direction, speed }) => ({
    display: 'inline-flex',
    whiteSpace: 'nowrap',
    animationName: keyframes`
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(${direction === 'left' ? '-100%' : '100%'});
      }
    `,
    animationDuration: `${duration / speed}ms`,
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
}));

interface InfiniteHorizontalScrollProps {
    children: React.ReactNode;
    duration: number;
    direction?: 'left' | 'right';
    speed?: number;
    containerWidth?: number;
}

const InfiniteHorizontalScroll: React.FC<InfiniteHorizontalScrollProps> = ({
    children,
    duration = 20000,
    direction = 'left',
    speed = 1,
    containerWidth = '100%',
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            const container = containerRef.current;
            const clone = container.cloneNode(true) as HTMLDivElement;
            container.parentNode?.appendChild(clone);

            return () => {
                container.parentNode?.removeChild(clone);
            };
        }
    }, []);

    return (
        <StyledBox sx={{ width: containerWidth }}>
            <AnimatedContainer duration={duration} direction={direction} speed={speed} ref={containerRef}>
                {children}
            </AnimatedContainer>
        </StyledBox>
    );
};

export default InfiniteHorizontalScroll;
