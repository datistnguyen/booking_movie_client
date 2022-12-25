import { useEffect, useState } from 'react'

const usePathname = (idFilm) => {
  const [data, setData]= useState()
  useEffect(()=> {
    setData(idFilm)
  }, [idFilm])
  return (
    data
  )
}

export default usePathname