import characters from '../../data/characters.json'

export default defineEventHandler(async event => {
  const { q = '' } = useQuery(event)

  return characters.filter(character => {
    return character.name.toLowerCase().includes(q.toLowerCase())
  })
})
