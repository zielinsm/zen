import { useState, useEffect } from 'react';
import constate from 'constate';

import { defaultText } from '../configuration';

const useEditor = () => {
    const [text, setText] = useState<string>('');
    const [previewEnabled, setPreviewEnabled] = useState<boolean>(false);

    /* Display default text on first use */
    useEffect(() => {
        const storedValue = localStorage.getItem('textValue');

        if (typeof storedValue === 'string' && storedValue.length > 1) {
            setText(storedValue);
        } else {
            setText(defaultText);
        }
    }, []);

    /* Prevent loss of progress on accidental tab closing */
    useEffect(() => {
        localStorage.setItem('textValue', text);
    }, [text]);

    const toggleMode = (): void => setPreviewEnabled(!previewEnabled);

    return {
        text,
        setText,
        previewEnabled,
        toggleMode,
    };
};

const [EditorState, useEditorContext] = constate(useEditor);

export { EditorState, useEditorContext };
