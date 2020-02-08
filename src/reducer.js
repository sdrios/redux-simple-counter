const initialState = {
    value: 0,
    color: ''
}

const reducer = (state = initialState, action) => {
    let { type, value, color } = action;
    if (type === "CHANGEVALUE") {
        return {
            value: state.value + value,
            color: state.color
        }
    }
      if (type === "CHANGECOLOR"){  
        return {
            color: color,
            value: state.value
            }
    }

    if (type === "RESETVALUE"){  
        return {
            color: state.color,
            value: value
            }
    }
return state
} 