
export default function selectColor(state  = '#000', action) {
  switch(action.type) {
    case "SELECT_COLOR": {
      return action.color;
    }
          
    default:
      return state;
  }
}


