export const validateInput = text => {
  console.log(text)
  if (text.includes('/')) {
    return true
  }

  return false
}