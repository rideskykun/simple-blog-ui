import React, {FC} from "react";
import {Link} from "react-router-dom";

const HomePostItem:FC = () => {
    return(
        <div className={'border border-t-0 border-black'}>
            <div className={'flex md:flex-row flex-col'}>
                <img
                    src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                    className={'md:w-96 w-full h-60 object-cover bg-white hover:opacity-80 transition'}
                />
                <div className={'border-l border-black p-3'}>
                    <p className={'text-sm text-gray-500'}>October 12 2022</p>
                    <p className={'text-xl md:text-3xl my-2'}>Article Title</p>
                    <p className={'text-sm md:h-full h-24 overflow-hidden text-ellipsis'}>{lorem}</p>
                </div>
            </div>
            <div className={'border-t border-black flex justify-end gap-5 items-center'}>
                <p className={'w-full text-gray-400 pl-3'}>/post/article-title</p>

                <a href={'#'} className={'px-5 py-2 transition border-r border-l border-white hover:bg-gray-200 hover:border-black'}>share</a>
                <a href={'#'} className={'px-5 py-2 transition border-r border-l border-white hover:bg-gray-200 hover:border-black'}>save</a>
                <Link to={'article'} className={'px-5 py-2 transition bg-black text-white hover:bg-gray-800 active:bg-gray-600'}>read</Link>
            </div>
        </div>
    )
}

export default HomePostItem

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur, nunc quis tincidunt suscipit, lacus sapien aliquam nulla, at sagittis orci neque id leo. Donec faucibus nisi ut dui scelerisque, at faucibus est tincidunt. Pellentesque eleifend tempus enim, ut porttitor nunc. Ut nisi lorem, dictum sed elit non, hendrerit consectetur velit. Fusce gravida, dui tempor pretium pulvinar, nunc est mollis quam, rhoncus condimentum erat lectus quis quam. Suspendisse scelerisque imperdiet pulvinar. Maecenas ullamcorper ut dolor quis pharetra. Nullam sit amet ipsum aliquam, commodo magna et, sagittis nibh. Sed lacus ante, accumsan vel blandit eget, auctor ut nisi. Morbi vitae erat sed nunc aliquam faucibus vel nec odio.'