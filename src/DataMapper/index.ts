import BookMapper from './BookMapper'

const start = () => {
  const mapper = new BookMapper()
  const bookA = mapper.findByID('a7512c9e-0338-49b7-8f57-0738c0846f49')
  const bookB = mapper.findByID('a7512c9e-0338-49b7-8f57-0738c0846f49')
  const bookC = mapper.findByID('3a3da217-d0d9-493c-83ef-cba9d8b65552')
  console.log('First query, hits database', bookA)
  console.log('Second query, returned from identity map', bookA === bookB)
  console.log('ID not found, returns null', bookC === null)
}

start()
