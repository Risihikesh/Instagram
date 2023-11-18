import React from "react";
import cat from '../../assets/cat.png';

export default function Comment({ username = "username", comment = "commentasdasdasdasdasdsadasdasdasdasdasdasdasdasdasda" }) {
  return (
    <div className='flex justify-start gap-4 px-4 border-b-[0.5px] border-black py-4'>
      <img className='w-[4rem]' src={cat} alt="userImg" />
      <div className='flex flex-col justify-start max-w-[15rem] overflow-hidden self-stretch'>
            <p className='text-lg font-semibold'>{username}</p>
            <p className='text-base font-normal break-words'>
                {comment}
            </p>
      </div>
    </div>
  );
}
