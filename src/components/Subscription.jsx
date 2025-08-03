import React from 'react'

/**
 * Renders a subscription section with a call-to-action for signing up to the Sushiman newsletter.
 * The section includes a heading, a description, and an input field with a button for email submission.
 * Utilizes AOS animations for entry effects.
 */
function Subscription() {
    return (
        <section id='services' className='p-16 flex flex-col justify-center items-center bg-[var(--primary-color)] bg-[url("src/assets/subscribe_bg.png")] bg-center bg-no-repeat bg-contain overflow-hidden subscription'>
            <h2 data-aos="flip-down" className=' text-[5rem]/[7rem] font-[playfair-display] font-semibold text-white text-center'>
                Get offers straight <br />
                to your inbox
            </h2>
            <p data-aos="fade-up" className='text-center font-[plus-jakarta-sans] text-lg/[2.25rem] font-light text-[rgba(255,255,255,0.8)] mt-8'>Sign up for the Sushiman newsletter</p>
            <div data-aos="fade-up" className='m-w-[500px] mt-10 py-3 pr-3 pl-6 flex gap-10 border-1 border-solid border-[rgba(255,255,255,0.5)] rounded-[46px] subscription__form'>
                <input type="text" placeholder="Enter your email address" className='flex-1 text-balance font-normal font-[plus-jakarta-sans] text-white  bg-transparent border-none outline-none placeholder:text-white '/>
                <button className=' p-5 max-w-44 text-base font-medium font-[plus-jakarta-sans] text-[var(--color-white)] text-center bg-[var(--black-400)] rounded-[46px] border-none outline-none cursor-pointer'>Get Started</button>
            </div>

        </section>
    )
}

export default Subscription