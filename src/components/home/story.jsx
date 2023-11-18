export default function Story({imgURL, text}){
    return(
        <>
            <img className='rounded-full w-[5rem] ring-2 m-2 border-2' src={imgURL} alt='userImg' />
        </>
    )
}