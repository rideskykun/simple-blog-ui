import React, {FC, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";

const Header:FC = () => {

    const navigate = useNavigate()
    const [showMobileNav, setShowMobileNav] = useState(false)

    return(
        <header className={'w-full z-50 bottom-0 right-0 top-0 sticky bg-white overflow-x-hidden'}>
            <nav className={'flex border-black border-b items-center md:justify-center justify-between'}>
                <Link to={'/'} className={'font-bold text-2xl pl-3 m-0 md:'}>
                    blog_
                </Link>
                <ul className={'w-full justify-center w-full md:flex hidden'}>
                    {
                        [
                            ['home', '/'],
                            ['categories', '#'],
                            ['about Us', '#'],
                            ['contact Us', '#']
                        ].map(([title, url]) => (
                            <li><button
                                onClick={()=>navigate(url)}
                                className={'hover:bg-gray-200 active:bg-gray-100 border-r border-l border-white hover:border-black py-3 px-6 transition'}
                            >
                                {title}
                            </button></li>
                        ))
                    }
                </ul>
                <button onClick={()=>setShowMobileNav(!showMobileNav)} className={'md:hidden inline py-3 px-6 active:bg-gray-800 bg-black text-white '}>
                    menu
                </button>
            </nav>
            <ul className={`w-full justify-center w-full ${showMobileNav?'':'hidden'}`}>
                {
                    [
                        ['home', '/'],
                        ['categories', '#'],
                        ['about Us', '#'],
                        ['contact Us', '#']
                    ].map(([title, url]) => (
                        <li><button
                            onClick={()=>navigate(url)}
                            className={'border-b border-black w-full text-left p-3 bg-gray-200'}
                        >
                            {title}
                        </button></li>
                    ))
                }
            </ul>
        </header>
    )
}

export default Header