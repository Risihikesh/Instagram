import reels from '../../assets/reels.png'
import search from '../../assets/search.png'
import home from '../../assets/home.png'
import dms from '../../assets/dms.png'
import logout from '../../assets/logout.png'
import { Link } from 'react-router-dom'

export default function Toolbar({logoutUser}){
    return(
        <>
            <footer className='flex md:hidden justify-evenly items-center py-[1rem] border-t-[0.5px] fixed bottom-0 left-0 right-0 bg-white z-10 border-black'>
                <Link to="/home" ><input type="image" className='w-[1.8rem] h-auto' src={home} alt='home' /></Link>   
                    <img className='w-[1.8rem] h-auto' src={search} alt='search' />
                    <img className='w-[1.8rem] h-auto' src={reels} alt='reels' />
                    <img className='w-[1.8rem] h-auto' src={dms} alt='dms' />
                <Link to='/login'><img className='w-[2rem] h-auto' src={logout} alt='user' onClick={logoutUser} /></Link>    
            </footer>
        </>
    )
}