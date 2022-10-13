import React, {FC} from "react";

type CardProps = {
    children: React.ReactNode
}

const Card:FC<CardProps> = ({children} : CardProps) => {
    return(
        <div className={'border border-gray-100 shadow rounded-2xl'}>
            {children}
        </div>
    )
}

export default Card