
export type ThemeInitStateType = {
    theme: string
}
const initState: ThemeInitStateType = {
    theme: 'some'
};

export const themeReducer = (state:ThemeInitStateType = initState, action: ChangeThemeCType): ThemeInitStateType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {
                ...state,
                theme: action.theme
            }
        }
        default: return state;
    }
};

export type ChangeThemeCType = ReturnType<typeof changeThemeC>
export const changeThemeC = (theme: string) => {
    return {
        type: 'CHANGE_THEME',
        theme,
    }as const
}; // fix any