export const validateInput = text => {
  if (text.includes('/')) {
    return true
  }

  return false
}

export const formattedDate = date => {
  return new Date(date)
    .toLocaleString()
    .split(',')
    .reverse()
    .join(', ')
}