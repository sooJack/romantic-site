export function saveToLocalStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export function loadFromLocalStorage(key, fallback = null) {
  const stored = window.localStorage.getItem(key)
  return stored ? JSON.parse(stored) : fallback
}
