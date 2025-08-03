import React from 'react'
const Menu = ({ name }) => {
    return (
        <li className='flex-1 flex items-center gap-3 m-w-[120px]'>
            <div className='flex justify-center items-center w-5 h-5 rounded-full bg-[var(--primary-color)]'>
                <img src="src/assets/check.svg" alt="check" className='w-[50%] h-[50%] object-contain' />
            </div>
            <p className='flex-1 text-base font-medium font-[plus-jakarta-sans] text-[var(--secondary-color)]'>{name}</p>
        </li>
    )
}
function Trending() {
    const SushiList = [
        {
            name: "Oshizushi"
        },
        {
            name: "Uramaki Sushi"
        },
        {
            name: "Nigiri Sushi"
        },
        {
            name: "Temaki Sushi"
        },
        {
            name: "Inari Sushi"
        },
        {
            name: "Hosomaki"
        }
    ]
    const TeaList = [
        {
            name: "Oruncha"
        },
        {
            name: "Sakura Tea"
        },
        {
            name: "Aojiru",
        },
        {
            name: "Ofukucha"
        },
        {
            name: "Kombu-cha"
        },
        {
            name: "Mugicha"
        }
    ]
    return (
        <section id='food' className='flex relative flex-col overflow-hidden'>
            <section className='w-full m-h-[640px] flex flex-row trending-sushi'>

                <div data-aos="fade-right" className='flex flex-1 flex-col justify-center px-4 py-8'>
                    <p className='sushi_subtitle'>What’s Trending / トレンド</p>
                    <h3 className='sushi_title'>Japanese Sushi</h3>
                    <p className='sushi_text'></p>
                    <ul className='item_list'>
                        {
                            SushiList.map((item, index) => {
                                return (
                                    <Menu key={index} name={item.name} />
                                )
                            })
                        }
                    </ul>
                </div>


                <div className='flex items-center justify-center flex-1 relative px-4 py-8 bg-[var(--color-white)] bg-no-repeat bg-contain bg-center bg-[url("src/assets/japanese_sushi.png")]'>
                    <img src="src/assets/sushi-5.png" alt='sushi-5' data-aos="fade-left" className='w-[256px] h-[260px] object-contain' />
                    <div className='trending_arrow top-[0%] left-[-2px] '>
                        <img src="src/assets/arrow-vertical.svg" alt="arrow-vertical" className='w-auto h-[300px] ' />
                    </div>
                    <div className='trending_arrow bottom-[0] right-[20%]'>
                        <img src="src/assets/arrow-horizontal.svg" alt="arrow-horizontal" className='w-full h-auto' />
                    </div>
                </div>

            </section>

            <div className=" absolute top-[40.5%] left-[45.5%] z-1 rounded-full w-[100px] h-[100px] bg-[var(--secondary-color)] cursor-pointer flex items-center justify-center trending__discover" data-aos="zoom-in">
                <p className=' text-lg font-normal font-[plus-jakarta-sans] text-[var(--color-white)] uppercase'>Discover</p>
            </div>


            <section className='w-full m-h-[640px] flex flex-row trending-drink'>
                <div className='flex items-center justify-center flex-1 relative px-4 py-8 bg-[var(--color-white)] bg-no-repeat bg-contain bg-center bg-[url("src/assets/japanese_drinks.png")]'>
                    <img src="src/assets/sushi-4.png" alt='sushi-4' data-aos="fade-left" className='w-[256px] h-[260px] object-contain' />
                    <div className='trending_arrow top-[0%] right-[-2px]'>
                        <img src="src/assets/arrow-vertical.svg" alt="arrow-vertical" className='w-auto h-full' />
                    </div>
                    <div className='trending_arrow top-[0] left-[20%]'>
                        <img src="src/assets/arrow-horizontal.svg" alt="arrow-horizontal" className='w-full h-auto' />
                    </div>
                </div>

                <div data-aos="fade-right" className='flex flex-1 flex-col justify-center px-4 py-8'>
                    <p className='sushi_subtitle'>What’s Trending / トレンド</p>
                    <h3 className='sushi_title'>Japanese Drink</h3>
                    <p className='sushi_text'></p>
                    <ul className='item_list'>
                        {
                            TeaList.map((item, index) => {
                                return (
                                    <Menu key={index} name={item.name} />
                                )
                            })
                        }
                    </ul>
                </div>




            </section>

        </section>
    )
}

export default Trending