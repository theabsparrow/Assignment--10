import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Tooltip } from 'react-tooltip'


// import required modules
import { EffectCoverflow, } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';


const BannerSlide = ({ bannerSlides }) => {


    return (
        <Fade>
            <div className='font-inter'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        bannerSlides.map(bannerSlide => <SwiperSlide key={bannerSlide._id}>
                            <div style={{ backgroundImage: `url(${bannerSlide.photo})` }} className='h-[85vh] bg-no-repeat bg-center bg-cover px-5 py-5 rounded-xl flex flex-col items-center justify-center'>
                                <div className='text-center'>
                                    <h1 className='text-6xl font-bold leading-12 bg-[#ef285380] py-3 rounded-xl text-white'>{bannerSlide.item}</h1>
                                    <p className='mt-6 text-2xl font-semibold bg-[#ef285380] py-3 rounded-xl text-white px-5'>{bannerSlide.detail}</p>
                                </div>
                                <div className='mt-5'>
                                    <Link id="my-anchor-element-id" to='/allArtItems' className='btn bg-[#ef2853] border-none text-white hover:bg-black'>View all items</Link>
                                    <Tooltip
                                        // Don't forget the `#`!
                                        anchorSelect="#my-anchor-element-id"
                                        content="Click me to view the page"
                                    />
                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </Fade>
    );
};

BannerSlide.propTypes = {
    bannerSlides: PropTypes.array
}
export default BannerSlide;