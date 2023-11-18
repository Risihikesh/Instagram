/* eslint-disable no-unused-vars */
import React from 'react'
import Post from './post'
import Header from './header'
import cat from '../../assets/cat.png'
import Toolbar from './toolbar'
import Story from './story'
import { useDispatch, useSelector } from 'react-redux'
import Create from './createPost'
import LeftNav from './desktop/leftNav'
import RightNav from './desktop/rightNav'
import { logOut } from '../../redux/slices/usersSlice'

export default function Home(){

    const dispatch = useDispatch();

    const [open, setOpen] = React.useState(false);

    const openCreate = () => {
        setOpen(true);
    }

    const closeCreate = () => {
        setOpen(false);
    }

    const users = useSelector((state) => state.user.users);

    const currentUser = useSelector((state) => state.user.currentUser);

    const posts = useSelector((state) => state.posts.posts);

    const handleLogOut = async () => {
        await dispatch(logOut());
    }

    return(
        <div>
            <Header open={openCreate} />
            <div className='mt-[5rem] flex items-center justify-center gap-2 mb-[0.5rem] md:hidden md:mt-0'>
                <img className='w-[1.8rem] h-auto' src={cat} alt='user' />
                <p className='text-lg font-semibold'>{currentUser.username}</p>
            </div>
            <div className='flex'>
                <LeftNav open={openCreate} logOutUser={handleLogOut} currentUser={currentUser}/>
                <div className='md:ml-[16vw]'>
                    <div id="stories" className='flex p-2 overflow-x-auto 480px:mx-[8rem] w-full mx-auto 480px:w-[480px]'>
                       
                    </div>
                    <div id="posts" className='mx-auto w-full 480px:w-[480px]'>
                        <div className='flex flex-col items-center pb-[4rem] md:pb-0'>
                        {posts?.map((post) => (
                                <Post
                                    key={post.postId}
                                    postId={post.postId} 
                                    username={post.username}
                                    likes={post.likes}
                                    caption={post.caption}
                                    imageUrl={post.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <RightNav username={currentUser.username} name={currentUser.fullName} />
            </div>
            <Toolbar logoutUser={handleLogOut} />
            {open && <Create close={closeCreate} />}
        </div>
    )
}
