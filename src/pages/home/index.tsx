import React, {FC} from 'react'
import Card from "../../components/card";
import HomePostItem from "./home-post-item";

const Home:FC = () => {
    return(
        <>
            <div className={'border border-t-0 p-2 border-black'}>
                <h1 className={'text-3xl'}>
                    recent posts
                </h1>
            </div>
            <HomePostItem/>
            <HomePostItem/>
            <HomePostItem/>

            <div className={'border-black border-r border-l flex justify-between items-center pl-3'}>
                <p>Page 1</p>
                <div>
                    <button className={'transition border-r border-l border-white hover:border-black hover:bg-gray-200 px-5 py-3'}> {'<'} </button>
                    <button className={'transition border-l border-white hover:border-black hover:bg-gray-200 px-5 py-3'}> {'>'} </button>
                </div>
            </div>
        </>
    )
}

export default Home