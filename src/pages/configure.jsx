import React from 'react'

export function Configure() {
  return (
    <>
        <section className="relative block h-[12vh]">
            <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
            <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        </section>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <img
                alt="Coming soon img"
                src="/img/comingsoon.jpg"
                className=""
            />
        </div>
    </>
  )
}

export default Configure