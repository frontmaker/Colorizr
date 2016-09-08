
export default function setColors(state = [], action) {
    switch (action.type) {
        case "ADD_COLOR":
            return [...state, action.color]

        case 'REMOVE_COLOR':

            let arr = state.filter((item) => {
               return item != action.color
            });

            return arr;

        case 'SELECT_COLORS':

            return action.colors;

        default:
            return state;
    }
}