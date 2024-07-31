import React, { useState, useEffect } from 'react';
import { Typography as MUITypography, styled } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';

interface TypingEffectProps {
    texts: string[];
    typingDelay?: number;
    pauseDelay?: number;
    variant?: Variant;
    shouldRepeat?: boolean;
}

const Typography = styled(MUITypography)({
    display: 'block',
    whiteSpace: 'pre',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: '34px',
    '@media (max-width: 1199.98px)': {
        fontSize: '26px',
    },
    '@media (max-width: 768.98px)': {
        fontSize: '22px',
    },
    '@media (max-width: 575.98px)': {
        fontSize: '18px',
    },
    '& span': {
        fontSize: '38px',
        '@media (max-width: 1199.98px)': {
            fontSize: '30px',
        },
        '@media (max-width: 768.98px)': {
            fontSize: '28px',
        },
    },
});

const TypingEffect: React.FC<TypingEffectProps> = ({
    texts,
    typingDelay = 100,
    pauseDelay = 1000,
    shouldRepeat = false,
    variant = 'h4',
}) => {
    const [displayText, setDisplayText] = useState('');
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const [isRemoving, setIsRemoving] = useState(false);

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout> | null = null;

        const handleTyping = () => {
            const currentText = texts[currentTextIndex];
            const nextChar = currentText[currentCharIndex];

            if (isTyping && nextChar) {
                setCurrentCharIndex(currentCharIndex + 1);
                setDisplayText(displayText + nextChar);
            } else if (isTyping && !nextChar) {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                    setIsRemoving(true);
                }, pauseDelay);
            } else if (isRemoving && displayText.length > 0) {
                setDisplayText(displayText.slice(0, -1));
                setCurrentCharIndex(currentCharIndex - 1);
            } else if (isRemoving && displayText.length === 0) {
                if (shouldRepeat || currentTextIndex === texts.length - 1) {
                    timeout = setTimeout(() => {
                        setCurrentTextIndex((prevIndex) => (prevIndex + 1 < texts.length ? prevIndex + 1 : 0));
                        setCurrentCharIndex(0);
                        setIsTyping(true);
                        setIsRemoving(false);
                    }, pauseDelay);
                } else {
                    setCurrentTextIndex(currentTextIndex + 1);
                    setCurrentCharIndex(0);
                    setIsTyping(true);
                    setIsRemoving(false);
                }
            }
        };

        timeout = setTimeout(handleTyping, typingDelay);

        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [
        currentCharIndex,
        currentTextIndex,
        displayText,
        texts,
        typingDelay,
        pauseDelay,
        isTyping,
        isRemoving,
        shouldRepeat,
    ]);

    return (
        <Typography variant={variant}>
            {displayText}
            {(isTyping || isRemoving) && <span>|</span>}
        </Typography>
    );
};

export default TypingEffect;
