export default defineEventHandler(async (event) => {
  const { public: publicRuntimeConfig } = useRuntimeConfig()
  return { s: new Date(), publicRuntimeConfig }
})
