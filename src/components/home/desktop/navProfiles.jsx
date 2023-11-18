export default function NavProfile({imgURL, username, text, btnText}){
    return(
        <div className="flex items-center justify-evenly">
            <img className="w-[2rem] mr-[1rem]" src={imgURL} alt='userImg' />
            <div className="flex flex-col justify-start">
                <p className="text-base font-semibold">
                    {username}
                </p>
                <p className=" overflow-x-hidden font-normal text-sm">{text}</p>
            </div>
            <button className="text-sm font-semibold text-blue-500 ml-auto">{btnText}</button>
        </div>
    )
}