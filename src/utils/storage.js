export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}

export const removeItem = name => {
  window.localStorage.removeItem(name)
}
