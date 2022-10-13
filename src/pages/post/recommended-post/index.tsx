import React, {FC} from "react";

const RecommendedPost:FC = () => {
    return(
        <div className={'bg-white'}>
            <img
                src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className={'w-full h-640 object-cover bg-white hover:opacity-80 transition border-b border-t border-black '}
            />
            <p className={'p-3 text-xl'}>article title</p>
            <div className={'border-t border-black grid grid-cols-2'}>
                <button className={'py-2 border-r hover:border-black border-white hover:bg-gray-200'}>save</button>
                <button className={'py-2 bg-black text-white hover:bg-gray-800 active:bg-gray-600'}>read</button>
            </div>
        </div>
    )
}

export default RecommendedPost