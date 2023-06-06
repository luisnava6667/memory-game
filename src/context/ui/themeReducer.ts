import { ThemeState } from '.'

type ThemeActionType = { type: '[THEME] - light' } | { type: '[THEME] - dark' }

export const themeReducer = (
  state: ThemeState,
  action: ThemeActionType
): ThemeState => {
  switch (action.type) {
    case '[THEME] - light':
      return { ...state, modeLight: true }
    case '[THEME] - dark':
      return { ...state, modeLight: false }
    default:
      return state
  }
}
