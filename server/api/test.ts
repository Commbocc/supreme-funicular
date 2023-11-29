import contentstack from 'contentstack'

const { Stack, Region } = contentstack

export default defineEventHandler(async (event) => {
  try {
    const stack = new Stack({
      api_key: '',
      delivery_token: '',
      environment: '',
      region: Region.US,
    })

    console.log({ stack })
  } catch (error) {
    console.log({ error })
  }

  return { s: 1 }
})
