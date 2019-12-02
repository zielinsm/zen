import { colorRange } from '../configuration';
import generateNumber from './generateNumber';

const generateColor = () => [
    generateNumber(colorRange.red.max, colorRange.red.min),
    generateNumber(colorRange.green.min, colorRange.green.max),
    generateNumber(colorRange.blue.min, colorRange.blue.max),
];

export default generateColor;
