;(function() {
  const toggler = document.getElementById('toggler')
  toggler.addEventListener('mouseenter', toggle)
  toggler.addEventListener('mouseleave', toggle)

  function toggle() {
    const current = localStorage.theme
    const next = current === 'dark' ? 'light' : 'dark'
    const { classList } = document.documentElement
    classList.remove(current)
    classList.add(next)
    localStorage.theme = next
  }
}())