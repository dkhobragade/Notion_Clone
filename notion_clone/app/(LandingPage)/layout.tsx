import React from 'react'
import Navbar from './_components/Navbar'

interface Props {
    children: React.ReactNode
}

const Layout = (props: Props) => {
    return (
        <div className=' dark:bg-[#1F1F1F]'>
            <Navbar />
            <main className='h-full pt-40'>
                {props.children}
            </main>
        </div>
    )
}

export default Layout