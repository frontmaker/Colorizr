
export const addColor = (color) => {
    return {
        type: 'ADD_COLOR',
        color: color
    }
};


export const removeColor = (color) => {
    return {
        type: 'REMOVE_COLOR',
        color: color
    }
};



export const setColors = (colors) => {
    return {
        type: 'SELECT_ALL',
        colors: colors
    }
};

