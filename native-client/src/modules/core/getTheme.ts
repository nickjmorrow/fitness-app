const MEDIUM_BRIGHTNESS = 40;

const CONFIG = {
    LOWEST_BRIGHTNESS: 50,
    BRIGHTNESS_INCREMENT: 10,
    NUM_COLORS: 7,
    GRAYSCALE: {
        HUE: 0,
        SATURATION: 0,
    }
}

interface ColorPalette {
    c1: string;
    c2: string;
    c3: string;
    c4: string;
    c5: string;
    c6: string;
    c7: string;
}

const buildColorPalette = ({ hue, saturation, lowestBrightness, brightnessIncrement }: { hue: number; saturation: number; lowestBrightness: number; brightnessIncrement: number; }): ColorPalette => new Array(CONFIG.NUM_COLORS).fill(null).reduce((agg, _, i) => ({
    ...agg,
    [`c${i + 1}`]: `hsl(${hue}, ${saturation}%, ${lowestBrightness + (i * brightnessIncrement)}%)`
}), {});

const grayscaleColorPalette = buildColorPalette({ hue: 0, saturation: 0, lowestBrightness: 15, brightnessIncrement: 5 });

export const getTheme = () => ({
    colors: {
        background: grayscaleColorPalette.c2,
        lightGray: 'lightgray',
        grayscale: grayscaleColorPalette,
    },
    typography: {
        title: {
            color: 'white',
            fontSize: 40
        },
        paragraph: {
            color: 'white'
        }
    }
})