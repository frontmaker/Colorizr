
export default function setColors(state = [], action) {
    switch (action.type) {
        case "ADD_COLOR":
            return [...state, action.color]

        case 'SET_COLORS':
            return [action.colors]
        
        default:
            return state;
    }
}