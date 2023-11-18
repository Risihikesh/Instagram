import cat from '../../../assets/cat.png'
import NavProfile from './navProfiles'

export default function RightNav({username, name}){
    return(
        <div className='hidden md:flex flex-col p-[2rem] w-[28vw] gap-[2rem]'>
            <div>
                <NavProfile imgURL={cat} username={username} text={name} btnText="Switch" />
            </div>
            <div className='flex justify-between'>
                <p className='text-base text-gray-500 font-semibold'>Suggestions For You</p>
                <p className='text-base font-semibold ml-auto'>See All</p>
            </div>
            <div className='flex flex-col gap-2'>
                <NavProfile imgURL={cat} username='User1' text='Followed by random_user1...' btnText="Follow" />
                <NavProfile imgURL={cat} username='User2' text='Followed by random_user2...' btnText="Follow" />
                <NavProfile imgURL={cat} username='User3' text='Followed by User +9 more...' btnText="Follow" />
                <NavProfile imgURL={cat} username='User4' text='Followed by User +8 more...' btnText="Follow" />
                <NavProfile imgURL={cat} username='User5' text='Followed by random_user3...' btnText="Follow" />
            </div>
        </div>
    )
}