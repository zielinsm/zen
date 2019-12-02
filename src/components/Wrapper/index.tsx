import React, { useState } from 'react';
import isEqual from 'lodash/isEqual';

import { timeRange } from '../../configuration';

import useInterval from '../../utils/useInterval';
import generateColor from '../../utils/generateColor';

import styles from './styles/wrapper.module.css';

const Wrapper: React.FC = ({ children }: { children?: any }) => {
    const [nextTransition, setNextTransition] = useState<number>(Date.now() + timeRange.changeInterval);
    const [transitionPending, setTransitionPending] = useState<boolean>(false);
    const [currentColor, setCurrentColor] = useState<number[]>(generateColor());
    const [nextColor, setNextColor] = useState<number[]>(generateColor());

    useInterval(() => {
        if (Date.now() >= nextTransition) {
            setTransitionPending(true);
        }

        if (transitionPending) {
            setCurrentColor((prevColor: any) => {
                const newColor = prevColor.map((color: number, index: number) => {
                    let nextValue = color;

                    if (color > nextColor[index]) {
                        nextValue = color - 1;
                    }

                    if (color < nextColor[index]) {
                        nextValue = color + 1;
                    }

                    return nextValue;
                });

                return newColor;
            });
        }

        if (isEqual(currentColor, nextColor)) {
            setTransitionPending(false);
            setNextColor(generateColor());
            setNextTransition(Date.now() + timeRange.changeInterval);
        }
    }, timeRange.tick);

    return (
        <div
            style={{
                backgroundColor: `rgb(${currentColor.join()})`,
            }}
        >
            <div className={styles.inner}>{children}</div>
        </div>
    );
};

export default Wrapper;
