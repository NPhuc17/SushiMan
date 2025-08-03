import React from 'react'

function Hero() {
    return (
        <section className='flex m-h-[calc(100vh-74px)] overflow-hidden  hero'>
            <div className='flex-1 flex flex-col relative z-5  hero-image'>
                <img src='src/assets/sushi-1.png' alt='sushi-1' className='w-[120%] h-full object-contain' data-aos="fade-up"/>
                <h2 className=' absolute bottom-0 p-1.5 font-[playfair-display font-bold text-9xl text-white' data-aos="fade-up">
                    日<br />
                    本<br />
                    食<br />
                </h2>
                <div className=' absolute inset-0 w-[100%] bg-[var(--primary-color)] z-[-1]'></div>
            </div>

            <div className='flex-1 flex flex-col justify-between'>
                <div className=' p-16 flex flex-1 justify-center flex-col  hero-content-info' data-aos="fade-left">
                    <h1 className='text-[5rem] font-semibold font-[playfair-display] color=[var(--secondary-color)] '>Feel the taste of Japanese food</h1>
                    <p className=' text-2xl font-[plus-jakarta-sans] color-[var(--secondary-color)] mt-8 ml-8'>From anywhere and anytime in the world</p>
                    <div className='mt-8 ml-8 flex flex-wrap gap-9  hero-content__buttons'>
                        <button className=' p-5 rounded-4xl min-w-[212px] border-0 outline-0 bg-[var(--secondary-color)] cursor-pointer text-white text-[1.125rem]/[1.5]'>
                            Order Now
                        </button>
                        <button className='border-0 outline-0 bg-transparent flex items-center text-base cursor-pointer text-[var(--black-200)] font-[var(--plus-jakarta-sans)]'>
                            <img src='src/assets/play-circle.svg' alt='play-circle' className=' mr-3 w-10 h-10 object-contain'/>
                            How to order
                        </button>
                    </div>
                </div>
                
                <div className=' px-16 py-8 flex flex-wrap gap-5 bg-[var(--color-white)]  hero-content__testimonial' data-aos="fade-up">
                    <div className='flex-1 gap-2.5'>
                        <h4 className=' text-6xl font-normal font-[playfair-display] '>24<span>k+</span></h4>
                        <p className='font-[plus-jakarta-sans] font-normal text-base max-h-52'>Happy Customers</p>
                    </div>
                    <div className='flex flex-1 items-center gap-2.5 pl-5 border-l-2 border-solid'>
                        <img src='src/assets/user.png' alt='user' className=' w-15 h-15 object-contain'/>
                        <p className=' text-base font-normal font-[plus-jakarta-sans] text-[var(--secondary-color)] '>"This is the best Japanese food I have ever had. Highly recommended!"</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero