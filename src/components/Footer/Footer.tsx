const FooterComponent = () => {
  const intialYear = 2024
  const currentYear = new Date().getFullYear()
  const actualYear = currentYear > intialYear ? `${intialYear} - ${currentYear}` : intialYear
  return (
    <footer className='p-4 text-center font-semibold border-t border-zinc-200 text-zinc-600 mt-5'>
      &copy; {actualYear} - vicentejorquera.dev, Todos los derechos reservados. 
    </footer>
  )
}

export { FooterComponent }