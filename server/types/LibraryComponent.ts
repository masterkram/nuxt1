import type LibraryExample from './LibraryExample'

export default interface LibraryComponent {
  name: string
  description: string
  usage: string
  examples?: LibraryExample[]
}
