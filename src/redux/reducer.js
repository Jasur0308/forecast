const initialState = {
    theme: localStorage.getItem("theme") || "light",
    searchData: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SEARCH_DATA":
        return {
            ...state,
            searchData: action.data
        }
        case "CHANGE_THEME" :
            localStorage.setItem("theme", action.theme)
            return {
                ...state,
                theme: action.theme
            }
        default :
            return state
    }
}