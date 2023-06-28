import Link from 'next/link';
import { useRouter } from 'next/router';


const AllButton = () => {

    return (
        <div className='w-full bg-green-600 text-center 
        text-xl text-white py-1 rounded-sm'>
            <Link href="/cars">
                See All Cars
            </Link>
        </div>
    );
};

export default AllButton;