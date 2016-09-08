
const initialState = {
    theme: true,
    colors: [],
    color: '#FFF'
};


export default function DarkerAndLighter(state = initialState, action) {
    switch (action.type) {
        case "CHANGE_THEME":
            const obj = Object.assign({},state);

            obj.theme = !state.theme;
            
            return obj;

        default:
            return state;
    }
}