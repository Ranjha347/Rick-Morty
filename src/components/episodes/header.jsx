import React from 'react'

export default function header({episode_name,info}) {
   return (
      <>
         <h1 className="text-center ">Episodes : <span className='episode-name'>{episode_name}</span></h1>
         <h5 className='text-center epi-det pb-5'>{info}</h5>
      </>
   )
}
