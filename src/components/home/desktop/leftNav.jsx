import logoText from '../../../assets/logoText.png'
import NavBtns from './navBtns'
import home from '../../../assets/home.png'
import search from '../../../assets/search.png'
import reels from '../../../assets/reels.png'
import dms from '../../../assets/dms.png'
import cat from '../../../assets/cat.png'
import like from '../../../assets/like.png'
import create from '../../../assets/addPost.png'
import settings from '../../../assets/setting.png'
import logOut from '../../../assets/logout.png'
import { Link } from 'react-router-dom'

export default function LeftNav({open, logOutUser, currentUser}) {
    return(
        <div className='hidden fixed top-0 left-0 z-10 w-[16vw] md:flex flex-col justify-start items-center gap-[2rem] p-[2rem] pl-[0rem] h-screen border-r-[0.5px] border-black/20'>
            <div>
                <img className='w-[7rem] h-auto' src={logoText} alt='logoText' />
            </div>
            <div className='flex flex-col justify-evenly gap-[2rem]'>
                <Link to='/home'><NavBtns imgURL={home} text='Home' /></Link>
                <NavBtns imgURL={search} text='Search' />
                <NavBtns imgURL={reels} text='Reels' />
                <NavBtns imgURL={dms} text='Message' />
                <NavBtns imgURL={like} text='Notifications' />
                <NavBtns imgURL={create} text='Create' handleClick={open} />
                <NavBtns imgURL={cat} text={currentUser.username} />
            </div>
            <div className='flex flex-col gap-[2rem] mt-[8rem]'>
                <NavBtns imgURL={settings} text='Settings' />
                <Link to="/login"><NavBtns imgURL={logOut} text='Logout' handleClick={logOutUser}/></Link>
            </div>
        </div>
    )
}