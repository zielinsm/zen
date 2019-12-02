import React from 'react';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

import { useEditorContext } from '../../utils/useEditor';

import styles from './styles/editor.module.css';

const Editor: React.FC = () => {
    const { text, setText, previewEnabled } = useEditorContext();

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value);

    const editorStyles = classNames({ [styles.inner]: true, [styles.editor]: true });
    const previewStyles = classNames({ [styles.inner]: true, [styles.preview]: true });

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {!previewEnabled && <textarea className={editorStyles} value={text} onChange={handleChange} />}
                {previewEnabled && <ReactMarkdown className={previewStyles} source={text} />}
            </div>
        </div>
    );
};

export default Editor;
