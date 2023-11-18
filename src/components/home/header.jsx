import logoText from '../../assets/logoText.png'
import addPost from '../../assets/addPost.png'
import like from '../../assets/like.png'

export default function Header({open}){
    return(
        <>
            <header className=' md:hidden flex justify-between items-center px-[1rem] border-b-[0.5px] border-black fixed top-0 left-0 right-0 bg-white z-10'>
                <div>
                    <img className='w-[8rem] h-auto' src={logoText} alt='logoText' />
                </div>
                <div className='flex items-center gap-4'>
                    <input type='image' className='w-[1.8rem] h-auto' src={addPost} alt='addPost' onClick={open}/>
                    <img className='w-[1.8rem] h-auto' src={like} alt='like' />
                </div>
            </header>
        </>
    )
}