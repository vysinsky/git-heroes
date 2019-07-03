import hulk from './heroes/hulk.json'
import spiderman from './heroes/spiderman.json'

export interface Hero {
  name: string
  image?: string
  subtitle?: string
}

export default [
  hulk,
  spiderman,
]
