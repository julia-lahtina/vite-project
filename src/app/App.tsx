import './App.css'
import { Decks } from '../features/decks/Decks.tsx'
import { GlobalError } from './GlobalError/GlobalError.tsx'
import { LinearLoader } from '../common/components/Loader/LinearLoader.tsx'
import { selectIsLoading } from './app-selectors.ts'
import { useAppSelector } from './store.ts'

export const App = () => {
  const isLoading = useAppSelector(selectIsLoading)
  return (
    <div>
      {isLoading === 'loading' && <LinearLoader />}
      <Decks />
      <GlobalError />
    </div>
  )
}
