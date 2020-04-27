import { ThemeContext } from '../Components/Theme/Provider'
import { useContext } from 'react'
/**
 * Get current theme from context
 */
export default function useTheme() {
  const { theme } = useContext(ThemeContext)
  return theme
}
