import React from 'react'

export function useFetch<T>() {
  const [data, setData] = React.useState<T | null>(null)
  const [error, setError] = React.useState<string | null>(null)
  const [loading, setLoading] = React.useState<boolean>(false)

  const request = React.useCallback(async (url: string) => {
    let response
    let json
    try {
      setError(null)
      setLoading(true)
      response = await fetch(url)
      json = await response.json()
      if (response.ok === false) throw new Error(json.message)
    } catch (err) {
      json = null
      const typedError = err as Error
      setError(typedError?.message)
    } finally {
      setData(json)
      setLoading(false)
    }
    return { response, json }
  }, [])

  return { data, loading, error, request }
}
