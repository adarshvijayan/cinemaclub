import {useEffect} from 'react'

export const useTitle = (title) => {
    useEffect(()=>{
        document.title = `${title} /Cinema Club`;
    })
  return null;
}
