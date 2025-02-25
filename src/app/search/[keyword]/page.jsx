import { getAnimeResponse } from '@/app/libs/api-libs'
import MangaList from '@/components/MangaList'
import Header from '@/components/MangaList/Header'
import React from 'react'

const Search = async({params}) => {
    const {keyword} = params
    const decodeKeyword = decodeURI(keyword)
    const searchManga = await getAnimeResponse(`manga`, `q=${decodeKeyword}`)

  return (
    <>
    <section className='p-2'>
        <Header title={`Pencarian untuk ${decodeKeyword}`} />
        <MangaList api={searchManga} />
    </section>
    </>
  )
}

export default Search