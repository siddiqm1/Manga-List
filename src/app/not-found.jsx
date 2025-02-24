"use client"
import { MagnifyingGlass } from '@phosphor-icons/react'
import Link from 'next/link'
import React from 'react'

const notFound = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className='flex justify-center items-center'>
            <MagnifyingGlass size={32} className='text-teal-600' />
            <h1 className='text-3xl m-1 mr-5 text-teal-600'>Not Found</h1>
        </div>
        <div>
            <h3><Link href='/' className='underline text-teal-600 hover:text-white transition-all'>Kembali ke Home</Link></h3>
        </div>

    </div>
  )
}

export default notFound