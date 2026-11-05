export default defineEventHandler(async (event) => {
  return { d: new Date(), static: 1 }
})
