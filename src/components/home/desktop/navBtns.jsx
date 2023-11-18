export default function NavBtns ({imgURL, text, handleClick}){
    return(
        <div className="flex gap-2 px-4 items-center justify-start cursor-pointer" onClick={handleClick}>
            <img className="w-[1.5rem]" src={imgURL} alt="icon" />
            <p className='text-sm font-semibold'>{text}</p>
        </div>
    )
}