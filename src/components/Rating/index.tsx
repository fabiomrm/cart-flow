import { AiFillStar, AiOutlineStar  } from 'react-icons/ai';

type Props = {
    rating: number;
    onClick?: (index: number) => void;
    style?: any;
}

export const Rating = ({ rating, onClick, style }: Props ) => {
    return(
        <>
            {
                [...Array(5)].map((_, index) => (
                    <span key={index} onClick={ onClick ? () => onClick(index) : () => {}} style={style}>
                        { rating > index ? 
                            (<AiFillStar fontSize={"1rem"}/>)
                            : 
                            (<AiOutlineStar fontSize={"1rem"}/>)
                        }
                    </span>
                ))
            }
        </>
    )
}