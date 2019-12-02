import React, { useState } from 'react';
import fileDownload from 'js-file-download';
import classNames from 'classnames';

import { useEditorContext } from '../../utils/useEditor';

import styles from './styles/menu.module.css';

const Menu: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const { text, previewEnabled, toggleMode } = useEditorContext();

    const saveFile = (e: React.MouseEvent): void => {
        e.preventDefault();
        fileDownload(text, 'file.md');
    };

    const toggleMenu = (e: React.MouseEvent): void => {
        e.preventDefault();
        setMenuOpen(!menuOpen);
    };

    const getLabelStyles = (enabled: boolean): string => classNames({ [styles.label]: true, [styles.labelActive]: enabled });
    const desktopStyles = classNames({ [styles.container]: true, [styles.desktopContainer]: true });
    const mobileStyles = classNames({
        [styles.container]: true,
        [styles.mobileContainer]: true,
        [styles.menuVisible]: menuOpen,
    });

    const handlePreviewClick = (e: React.MouseEvent): void => {
        e.preventDefault();
        toggleMode();
        setMenuOpen(false);
    };

    const menuContent = (
        <div className={styles.inner}>
            <h1 className={styles.heading}>zen</h1>
            <div className={styles.labelContainer}>
                <span onClick={handlePreviewClick} className={getLabelStyles(previewEnabled)}>
                    Preview
                </span>
                <span onClick={saveFile} className={styles.label}>
                    Save
                </span>
            </div>
        </div>
    );

    return (
        <>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <div />
                <div />
                <div />
            </div>
            <nav className={desktopStyles}>{menuContent}</nav>
            <nav className={mobileStyles}>{menuContent}</nav>
        </>
    );
};

export default Menu;
