import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getProducts } from '../Axiot/api'
import Fooder from '../component/Fooder'
import Header from '../component/Header'
import Header2 from '../component/Header2'
import Hide_header from '../component/Hide_header'
import Ontop from '../component/Ontop'
import { products } from '../data/data'
import { frech_thunk, get_tag, postcart, postwish } from '../Redux/Funtion_thunk'
import { store } from '../Redux/Store'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Funtion_debounce, Funtion_debounce_wish } from '../Redux/Funtion_debounce'


function Home({ states }) {

    const [as, setAs] = useState('')


    window.addEventListener('scroll', () => {
        setAs(window.scrollY)
    })


    const [trx, setTrx] = useState(200)
    const handleMouseMove = event => {
        // this.setState({
        //   x: event.clientX,
        //   y: event.clientY,
        // })
        var a = event.clientX
        setTrx(-event.clientX / 10)
    }

    const clearCoor = () => {
        // setTrx(100)
        setTrx(100)
    }
    // const dispatch = useDispatch()

    const [data, setData] = useState()
 
    const i = [1, 2, 3, 4, 5]

    const navigation = useNavigate()

    const onclickproduct = (id) => {
        navigation(`/product/${id}`)
    }



    // const get_products = () => {
    //     store.dispatch(get_tag())

    // }

    /////////////////////////sử lý debounce
    const [value_de, setValue_de] = useState({ soluong: 0, data: {} })
    const trangthai_de = Funtion_debounce(value_de, 800)

    const addcart = (item) => {
        setValue_de({ soluong: (value_de.soluong + 1), data: item })
    }


    ///wish
    const [value_wish, setValue_wish] = useState({ soluong: 0, data: {} })
    const trangthai_wish = Funtion_debounce_wish(value_wish, 800)
    const onclick_wish = (item) => {

        setValue_wish({ soluong: (value_wish.soluong + 1), data: item }) // lấy cả số lượng để kiểm tra trường hợp số lượng bằng 0 khi mới load 

    }
    //////////end debounce

    return (
        <div style={{
            display: 'flex',
            flexFlow: 'column',
            height: '100%'
        }} >
            {/* <Header /> */}
            <ToastContainer />

            <div id='scroller' style={{
                // // border: '3px solid #00ff00',
                width: '100%',
                // height: '660px',
                // overflowX: 'hidden',
                overflowY: 'auto',
                // backgroundColor: '#f3f4f6'

            }}>
                <Header2 scrol={as} />
                <Hide_header scrol={as} />
                <Ontop scrol={as} />
                {/* <button onClick={() => p}>
                    ay
                </button> */}
                <div className='slide' >
                    <div id="carouselExampleInterval" style={{ zIndex: '0' }} className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>

                                            <b>
                                                smart products
                                            </b>
                                            <h1>
                                                Summer Offer <br></br> 2024  Collecttion
                                            </h1>
                                        </div>

                                        <a href='#ui' style={{ textDecoration: 'none', color: "black" }}>
                                            <div className='button_slide_home'>
                                                Buy now
                                            </div>
                                        </a>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-hm1-2.png' className='img_slide' />
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>
                                            <b>
                                                smart products
                                            </b>
                                            <h1>
                                                Summer Offer <br></br> 2024  Collecttion
                                            </h1>
                                        </div>

                                        <a href='#ui' style={{ textDecoration: 'none', color: "black" }}>
                                            <div className='button_slide_home'>
                                                Buy now
                                            </div>
                                        </a>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png' className='img_slide' />
                                </div>
                            </div>
                            <div className="carousel-item">
                                {/* <img src="..." className="d-block w-100" alt="..." /> */}
                                <div className='item_slide'>
                                    <div>
                                        <div>
                                            <b>
                                                smart products
                                            </b>
                                            <h1>
                                                Summer Offer <br></br> 2024  Collecttion
                                            </h1>
                                        </div>

                                        <a href='#ui' style={{ textDecoration: 'none', color: "black" }}>
                                            <div className='button_slide_home'>
                                                Buy now
                                            </div>
                                        </a>
                                    </div>
                                    <img src='https://flone.jamstacktemplates.dev/assets/img/slider/single-slide-1.png' className='img_slide' />
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" style={{ zIndex: '0' }} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                            <iconify-icon icon="material-symbols:arrow-back-ios-new" style={{ color: 'gray' }} width="50"></iconify-icon>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" style={{ zIndex: '0' }} type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                            <iconify-icon icon="material-symbols:arrow-back-ios-new" style={{ color: 'gray' }} rotate="180deg" width="50"></iconify-icon>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>


                </div>
                <br /><br /><br />
                <ul className='ul_free_icon' >
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-1.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-2.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-3.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                    <li id='free_icon'>
                        <img className='icon_free ' src='https://flone.jamstacktemplates.dev/assets/img/icon-img/support-4.png' />
                        <div >
                            <b>
                                Free Shipping
                            </b>
                            <div>
                                Free shipping on all oder
                            </div>
                        </div>
                    </li>
                </ul >

                <br />

                <div >
                    <center>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '22px', left: '-84px' }}>

                        </h2>
                        DAILY DEALS
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '-11px', left: '84px' }}>

                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '37%' }}>
                            <div>
                                New Arrivals
                            </div>
                            <div>
                                Best Sellers
                            </div>
                            <div>
                                Sale Items
                            </div>
                        </div>
                    </center>


                </div>

                {/* <marquee behavior='scroll' >Hoc HTML tai VietJack - Vi du cach su dung the marquee.</marquee> */}

                <div className='products' id='ui'>
                    {/* {console.log("states: ...", states)}
                    {states.products ? states.products[1].name : ""} */}
                    {states.products?.slice(0, 8).map((e, ii) =>
                        <div key={ii} className='product' >
                            <div className='mini_add'>
                                new
                            </div>
                            <div className='img_product2'>
                                <img onClick={() => onclickproduct(e.id)} className='img_mini' style={{ width: '100%', height: '88%' }} src={e.mainImg2} /> 
                                <div className=' hide_mini' style={{ height: '10%', backgroundColor: '#a749ff' }}>
                                    <div className='hide_mini1' onClick={() => onclick_wish(e)} >
                                        <iconify-icon icon="ph:heart" style={{ color: 'white', cursor: 'pointer' }}></iconify-icon>
                                    </div>
                                    <div className='hide_mini2' onClick={() => addcart(e)}>
                                        buy now
                                    </div>
                                    <Link to={`/product/${e.id}`} style={{ width: '12%', height: '100%' }}>
                                        <div className='hide_mini3' style={{ width: '100%', height: '100%' }}>
                                            <iconify-icon icon="ic:outline-remove-red-eye" style={{ color: 'white' }}></iconify-icon>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <img onClick={() => onclickproduct(e.id)} className='img_product' style={{ width: '100%', height: '80%' }} src={e.mainImg} />

                            <div className='str_product'>
                                <Link className='Link_name_product' to={`/product/${e.id}`}>
                                    {e.name}
                                </Link>
                                <div>
                                    {i.map(ei => <iconify-icon key={ei} icon="ic:twotone-star-outline" style={{ color: e.start >= ei ? '#ffaa00' : 'gray' }}></iconify-icon>)}
                                </div>
                                <div>
                                    <small>
                                        {e.gia.toLocaleString('vi', {style : 'currency', currency : 'VND'})}
                                    </small>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                

                <div >
                    <center>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '22px', left: '-84px' }}>

                        </h2>
                        <b>
                            OUT BLOG
                        </b>
                        <h2 style={{ height: '2px', backgroundColor: 'black', width: '48px', position: 'relative', top: '-11px', left: '84px' }}>

                        </h2>


                    </center>
                    <div className='OUR_BLOG'>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-1.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-2.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                        <div className='out_blog_c1'>
                            <div className='out_blog_c2_1'>
                                <img className='img_out_blog' src='https://flone.jamstacktemplates.dev/assets/img/blog/blog-3.jpg' />
                            </div>
                            <div className='out_blog_c2_2'>
                                <p style={{ width: '53%', textAlign: 'center', margin: '0' }}>
                                    <b>
                                        A guide to latest trends
                                    </b>
                                </p>
                                <small style={{ color: 'gray', fontStyle: 'italic' }}>
                                    By Admin
                                </small>
                            </div>
                        </div>
                    </div>
                    {/* /// end out blog */}

                    <Fooder />



                </div>
            </div >

        </div >
    )
}

const mapStateToProps = state => {
    const states = state;
    // todo: state.counter;
    // console.log('test', states.cart)
    return { states }
};

export default connect(mapStateToProps)(Home);