import React from 'react'
import cat from '../../assets/cat.png'
import like from '../../assets/like.png'
import comment from '../../assets/comment.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import heart from '../../assets/heart.png'
import black from '../../assets/black.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLike } from '../../redux/slices/postsSlice'
import { toggleSavePost } from '../../redux/slices/usersSlice'

export default function Post({postId, username, likes, caption, imageUrl}) {

    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.user.currentUser);

    const saved = useSelector((state) => state.user.currentUser.savedPosts);

    const handleLike = () => {
        dispatch(toggleLike({postId: postId, currentUsername: currentUser.username}));
    }

    const handleSave = () => {
        dispatch(toggleSavePost({postId: postId, currentUsername: currentUser.username}));
    }

    return (
        <div className='w-full flex flex-col pb-[1rem]'>
            <div className='flex justify-start gap-4 px-4 py-[0.8rem] items-center border-b-[0.5px] border-black'>
                <img className='rounded-full w-[2.5rem]' src={cat} alt='userImg' />
                <p className='text-lg font-semibold'>{username}</p>
            </div>
            <div className='border-b-[0.5px] border-black'>
                <img className='w-full h-auto' src={typeof imageUrl === 'string' ? imageUrl : URL.createObjectURL(imageUrl)} alt='postImg' />
            </div>
            <div className='flex justify-between gap-4 px-4 py-[0.8rem] items-center'>
                <div className='flex gap-4'>
                    {likes?.includes(currentUser.username) ? (
                        <img onClick={handleLike} className='w-[1.8rem] h-auto' src={heart} alt='like' />
                    ) : (
                        <img onClick={handleLike} className='w-[1.8rem] h-auto' src={like} alt='like' />
                    )}
                <Link to={`/home/${postId}`}><img className='w-[1.8rem] h-auto' src={comment} alt='comment' /></Link>
                    <img className='w-[1.8rem] h-auto' src={share} alt='share' />
                </div>
                {saved?.includes(postId) ? (
                    <img onClick={handleSave} className='w-[1.8rem] h-auto' src={black} alt='save' />
                ) : (
                    <img onClick={handleSave} className='w-[1.8rem] h-auto' src={save} alt='save' />
                )}
            </div>
            <div className='flex justify-start gap-4 px-4 items-center'>
                <p className='text-lg font-semibold'>{likes.length} likes</p>
            </div>
            <div className='flex justify-start px-4 items-center overflow-hidden whitespace-normal'>
                <p className='text-lg font-semibold'>
                    {username}
                <span className='text-lg ml-[0.5rem] font-normal'>{caption}</span>
                </p>
            </div>
            <div className='flex justify-start px-4 items-center'>
            <Link to={`/home/${postId}`}><p className='text-lg text-gray-600 font-normal'>View all comments</p></Link>  
            </div>
        </div>
    )
}