export const originUrl = new URL(
  process.env.NEXT_PUBLIC_SHOP_ORIGIN || "http://localhost:3000",
)

export const getOriginUrl = (link: string = "/"): string =>
  new URL(link, originUrl).toString()
