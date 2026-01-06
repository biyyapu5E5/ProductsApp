import StarRating from './StarRating'
import { CgProfile } from 'react-icons/cg'

export default function ModelCard({ item }) {
    return (
        <div className='p-4  bg-gray-200 rounded-2xl flex flex-col gap-2'>
            <p className='font-bold flex gap-1 items-center m-0'> <CgProfile /> {item.reviewerName}</p>
            <StarRating value={item.rating} />
            <p>{item.comment}</p>
            <p>{item.date}</p>
        </div>
    )
}
