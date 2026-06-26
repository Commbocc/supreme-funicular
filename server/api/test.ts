export default defineEventHandler(async (event) => {
  return { s: new Date() }
})
