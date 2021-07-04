export const shortenText = (text) => {
  let maxLength = 100

  if (!text) {
    return
  }

  return text.length > maxLength ? text.substr(0, maxLength - 1) + '...' : text
}
