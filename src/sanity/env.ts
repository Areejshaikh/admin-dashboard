export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-07'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skhiZtueuTujSYdy6gqFQoPz0e2KIjv6FHPcIxfTajXN5SSOi0f0jv6BV4aaIiHxXo4qaVciccxisub9jeXz3u6oOnyICtacOPNXBXIRrBKKyO9YKXM9bs4RitrH3lmCeR9HqbieCjFbhRyiJJ5454YwbgL2nbhoLPWuZatCfgXRfQDvDGZv",
  'Missing environment variable: SANITY_TOKEN'
)
function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
