import React from 'react'

function AboutUs() {
    return (
        <section id='about' className='flex min-h-[720px] overflow-hidden flex-col lg:flex-row  about-us'>
            <div className='flex-1 flex flex-col md:flex-col lg:flex-col justify-center bg-[var(--color-white)] relative  about-us__image'>
                {/* <div className="about_img border-b-2 border-solid border-[var(--color-creamson)] bg-[url('src/assets/about_bg1.png')]"> */}
                <div className="about_img border-b-2 md:border-b-[8px] md:border-r-0 lg:border-b-0 lg:border-r-8 border-[var(--color-creamson)] border-solid bg-[url('src/assets/about_bg1.png')]  about-us__image-sushi3">

                    <img src="src/assets/sushi-3.png" alt="sushi-3" className='w-[225px] h-[200px]' data-aos="fade-right" />
                </div>

                <button className="block md:hidden lg:flex absolute right-[1%] top-[47%] px-5 py-3 max-h-16 bg-[var(--secondary-color)] text-[var(--color-white)] border-none outline-none font-[plus-jakarta-sans] gap-2 cursor-pointer  about-us__button">
                    Learn More

                    <img src="src/assets/arrow-right.svg" alt="arrow-right" className='w-5 h-5 object-contain text-white' />
                </button>

                <div className="about_img border-b-2 md:border-b-[8px] md:border-r-0 lg:border-b-0 lg:border-r-8 border-[var(--color-creamson)] border-solid bg-[url('src/assets/about_bg2.png')]  about-us__image-sushi2">
                    <img src="src/assets/sushi-2.png" alt="sushi-2" className='w-[240px] h-[160px]' data-aos="fade-right" />
                </div>
            </div>

            <div className='flex p-16 flex-1 justify-center flex-col' data-aos="fade-left">
                <p className='sushi_subtitle'>About Us / 私たちに関しては</p>
                <h3 className='sushi_title'>Our mission is to bring true Japanese flavours to you.</h3>
                <p className='sushi_text'>We will continue to provide the experience of Omotenashi, the Japanese mindset of hospitality, with our shopping and dining for our customers.</p>
            </div>
        </section>
    )
}

export default AboutUs