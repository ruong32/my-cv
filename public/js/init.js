function initTheme() {
  const currentTheme = localStorage.getItem('app-theme') || 'light'
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  window.currentTheme = currentTheme
}

initTheme()
