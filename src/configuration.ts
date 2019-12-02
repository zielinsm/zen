/* In mili-seconds */
const timeRange = {
    /* Background color change interval */
    changeInterval: 30000,
    /* Refresh rate */
    tick: 250,
};

/* RGB values */
const colorRange = {
    red: {
        min: 60,
        max: 110,
    },
    green: {
        min: 60,
        max: 120,
    },
    blue: {
        min: 50,
        max: 160,
    },
};

/* Text displayed in the editor when first visting the app */
const defaultText = `## Zen

Zen is a minimalistic markdown editor aiming to help you _concentrate_ on writing.
Create notes and documents without distractions! 👨‍💻`;

export { timeRange, colorRange, defaultText };
