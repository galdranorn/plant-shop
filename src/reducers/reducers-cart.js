export default function (state={"added": [], "summary": 0}, action) {
    switch (action.type) {
        case "ADD_TO_CART":
            let added = [...state.added, action.payload];
            state.added.map((product) => {
                if (product.id === action.payload.id) {
                    product.quantity += 1;
                    added = [...state.added]
                }
            })
            return {
                "added": added,
                "summary": state.summary + action.payload.price,
            }

        case "ADD_QTY":
            state.added.map((product) => { if (product.id === action.payload.id) { product.quantity += 1 } })
            return {
                "added": [...state.added],
                "summary": state.summary + action.payload.price,
            }

        case "REMOVE_QTY":
            state.added.map((product) => { if (product.id === action.payload.id) { product.quantity -= 1 } })
            return {
                "added": state.added.filter(function (object) { return object.quantity !== 0 }),
                "summary": state.summary - action.payload.price,
            }

        default: 
    }
    return state;
}