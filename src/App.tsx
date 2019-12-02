import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { EditorState } from './utils/useEditor';

import Editor from './components/Editor';
import Menu from './components/Menu';
import Wrapper from './components/Wrapper';

const App: React.FC = () => {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Roboto Slab:500', 'Roboto:500', 'sans-serif'],
            },
        });
    }, []);

    return (
        <EditorState>
            <Wrapper>
                <Menu />
                <Editor />
            </Wrapper>
        </EditorState>
    );
};

export default App;
