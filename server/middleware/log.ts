export default defineEventHandler((event) => {
  if (import.meta.dev) return
  console.log(`Nuxt Request: ${getRequestURL(event)}`)
})
