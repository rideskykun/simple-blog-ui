import React, {FC} from "react";

const Footer:FC = () => {
    return(
        <div className={'bg-white border-t border-black flex justify-between md:px-96 px-2 py-2 w-full'}>
            <p>Copyright 2022</p>

            <div>
                <ul>
                    {[
                        'Facebook',
                        'Instagram',
                        'Twitter'
                        ].map(social=>(
                        <li
                            className={'transition inline cursor-pointer px-3 py-2 border-r border-l hover:border-black border-white hover:bg-gray-200'}
                        >
                            {social}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Footer