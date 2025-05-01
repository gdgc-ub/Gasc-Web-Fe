import React from 'react'
// @ts-ignore
import gdsc from "../../../assets/gdsc.svg"

const About = () => {
  return (
    <div className='min-h-screen relative overflow-hidden'>
      <div className='flex'> 
        <div className='w-2/3 flex flex-col gap-6 justify-center items-center h-screen z-10'> 
        <h1 className='text-5xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-yellow-500 text-transparent bg-clip-text'>
          What is GDGOC ??
        </h1>
        <p className='w-1/2 text-lg text-justify'>
        GDGoC (Google Developer Groups on Campus) adalah komunitas mahasiswa global yang didukung oleh Google, merupakan rebranding dari GDSC sejak tahun 2024. Tujuan utama GDGoC adalah menjembatani teori yang dipelajari di kampus dengan praktik industri teknologi melalui kegiatan seperti workshop, hackathon, dan proyek kolaboratif. Komunitas ini membantu mahasiswa mengembangkan keterampilan teknis, kepemimpinan, serta membangun jaringan profesional di bidang teknologi.
        </p>
        </div>
        <div className=''> 
          <img src={gdsc} alt="GDSC Logo" className='' />
        </div>
      </div>
    </div>
  )
}

export default About
