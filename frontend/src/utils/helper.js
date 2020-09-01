export function urlencoded(data = {}) {
  return Object.entries(data).map(([key, val]) => {
    return `${encodeURIComponent(key)}=${encodeURIComponent(val)}`
  }).join('&')
}
