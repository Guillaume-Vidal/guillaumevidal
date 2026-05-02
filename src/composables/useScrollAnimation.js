export default function useScrollAnimation() {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  })

  const observe = (el) => {
    if (el) observer.observe(el)
  }

  return { observe }
}
