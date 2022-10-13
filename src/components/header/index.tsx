import React, {FC} from 'react'
import {useNavigate} from "react-router-dom";

const Header:FC = () => {

    const navigate = useNavigate()

    return(
        <header className={'fixed w-full z-50 bottom-0 right-0 md:top-0 md:sticky bg-white'}>
            <nav className={'flex border-black border-b items-center'}>
                <p className={'font-bold text-2xl pl-3 m-0'}>
                    <span className={'text-red-600'}>b</span>log
                </p>
                <ul className={'flex w-full justify-center'}>
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
            </nav>
        </header>
    )
}

export default Header