import { AppRootState } from './store'

export const selectIsLoading = (state: AppRootState) => state.app.status
