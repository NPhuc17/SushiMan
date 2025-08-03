import React from 'react'

function Food(props) {
    return (
        <button className='popular_button'>
            <img src={props.img} alt={props.alt} className='w-9 h-9 object-contain' />{props.name}
        </button>
    )
}

const Article = ({ img, title, rating, price, isActive = false, isDetail = false }) => {
    return (
        <article
        className={`article ${isActive ? 'active-card' : ''}`}
        data-aos="fade-up"
    >
        <div className='flex items-center justify-center'>
            <img 
                src={img} 
                alt={title} 
                className={`object-contain ${isActive ? 'w-[13.375rem] h-[10rem]' : 'w-28 h-28'}`}
            />
        </div>
        <h4 className={`mt-7 font-semibold font-[playfair-display] text-center ${
            isActive ? 'text-[2rem] text-[var(--black-500)]' : 'text-2xl/[32px] text-white'
        }`}>
            {title}
        </h4>
        <div className="flex justify-between mt-2 w-full">
            <div className="flex items-center gap-2">
                <img 
                    src="src/assets/star.svg" 
                    alt="star" 
                    className={`object-contain ${isActive ? 'w-8 h-8' : 'w-5 h-5'}`} 
                />
                <p className={`font-[plus-jakarta-sans] ${
                    isActive 
                        ? 'text-2xl text-[var(--secondary-color)]' 
                        : 'text-lg font-light text-white'
                }`}>
                    {rating}
                </p>
            </div>
        </div>
        <p className={`font-medium font-[plus-jakarta-sans] ${
            isActive ? 'text-2xl text-[var(--black-500)]' : 'text-xl text-white'
        }`}>
            ${price.toFixed(2)}
        </p>
    </article>
    );
};

function Popular() {
    const FoodPath = [
        {
            img: "src/assets/sushi-6.png",
            alt: "sushi-6",
            name: "Dango"
        },
        {
            img: "src/assets/sushi-7.png",
            alt: "sushi-7",
            name: "Ramen"
        },
        {
            img: "src/assets/sushi-8.png",
            alt: "sushi-8",
            name: "Udon"
        },
        {
            img: "src/assets/sushi-9.png",
            alt: "sushi-9",
            name: "Tempura"
        },
    ]

    const PopularPath = [
        {
            img: "src/assets/sushi-12.png",
            title: "Chezu Sushi",
            rating: "4.8",
            price: 21.00,
            isActive: false,

        },
        {
            img: "src/assets/sushi-11.png",
            title: "Original Sushi",
            rating: "5.0",
            price: 19.00,
            isActive: true,

        },

        {
            img: "src/assets/sushi-10.png",
            title: "Ramen Legendo",
            rating: "4.7",
            price: 13.00,
            isActive: false,

        },
    ]
    return (
        <section id='menu' className=' p-16 flex flex-col bg-[var(--primary-color)] bg-[url("src/assets/popular.png")] bg-center bg-no-repeat bg-contain overflow-hidden  popular-foods'>
            <h2 className="text-[3.5rem] font-[playfair-display] text-white font-semibold text-center" data-aos="fade-up">Popular Food / 人気</h2>
            <div className=' mt-11 m-w-full overflow-x-auto flex justify-center md:gap-6 gap-1' data-aos="fade-up">
                <button className='popular_button active'>
                    All
                </button>
                {
                    FoodPath.map((item, index) => {
                        return (
                            <Food key={index} img={item.img} alt={item.alt} name={item.name} />
                        )
                    })
                }
                <button className='popular_button'>Others</button>
            </div>

            <div className=' mt-16 flex justify-center items-end flex-wrap gap-8'>
                {
                    PopularPath.map((item, index) => {
                        return (
                            <Article key={index} img={item.img} title={item.title} rating={item.rating} price={item.price} isActive={item.isActive} isDetail={item.isDetail} />
                        )
                    })
                }
            </div>

            <button className=' w-fit px-7 py-3 mt-10 mr-auto ml-auto mb-0 font-medium text-lg/[23px] font-[plus-jakarta-sans] text-white outline-none border-none bg-[var(--secondary-color)] cursor-pointer rounded-[46px] flex justify-center items-center gap-5'>
                Explore Food
                <img src="src/assets/arrow-right.svg" alt="arrow-right" className=' w-3.5 h-3.5 object-contain' />
            </button>
        </section>
    )
}

export default Popular