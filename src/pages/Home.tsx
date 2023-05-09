import React from 'react';
import {Dropdown} from "react-bootstrap";
import {AiOutlineAppstore, AiOutlineDown, AiOutlineMail, AiOutlinePhone, AiOutlineSearch} from "react-icons/ai";
import {TiShoppingCart, TiSocialYoutube} from "react-icons/ti";
import MainCaroucel from "./fromHomePage/MainCaroucel";
import RightCaroucel from "./fromHomePage/RightCaroucel";
import SpecialCards from "./bookCards/SpecialCards";
import SpecialCards2 from "./allBookCards/SpecialCards";
import SpecialCards3 from "./ratingBookCards/SpecialCards";
import comment from "./Comment";
import {BsFillBagHeartFill, BsGeoAlt, BsInstagram} from "react-icons/bs";
import {Link} from "react-router-dom";
import {FaTelegram} from "react-icons/fa";

const Home = () => {

    return (
        <div>
            <div className={"lg:flex lg:px-2 xl:px-[100px] justify-around mt-5 md:mt-0"}>
                <div className={"px-2 mb-3 w-full sm:mb-3 md:mb-3 sm:w-12/12 md:w-12/12 lg:w-7/12 xl:w-8/12"}>
                    <MainCaroucel/>
                </div>
                <div className={"px-2 w-full sm:w-12/12 md:w-6/12 lg:w-4/12 xl:w-3/12"}>
                    <RightCaroucel/>
                </div>
            </div>
            <div
                className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center px-10 lg:px-20"}>
                <div className={"flex items-center w-full py-5"}>
                    <div className={"icon icon-graz w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5"}>
                    <div className={"icon icon-success w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5"}>
                    <div className={"icon icon-like w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5"}>
                    <div className={"icon icon-star w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
            </div>
            <div className={" my-border-color p-1"}>
                <div className={"text-center"}>
                    <h1 className={"font-semibold"} style={{fontFamily: 'initial'}}>Maxsus takliflar</h1>
                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</span>
                </div>
                <br/>
                <SpecialCards/>
            </div>
            <div className={"my-border-color p-1"}>
                <br/>
                <h2 className={"text-center"}>Barcha kitoblar</h2>
                <br/>
                <SpecialCards2/>
            </div>
            <div className={"my-border-color p-1"}>
                <br/>
                <h2 className={"text-center"}>Reytingi yuqori kitoblar</h2>
                <br/>
                <SpecialCards3/>
            </div>
            <div
                className={"grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center lg:px-20"}>
                <div className={"flex items-center w-full py-5 justify-center"}>
                    <div className={"icon icon-graz w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5 justify-center"}>
                    <div className={"icon icon-success w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5 justify-center"}>
                    <div className={"icon icon-like w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
                <div className={"flex items-center w-full py-5 justify-center"}>
                    <div className={"icon icon-star w-[50px] h-[50px]"}></div>
                    <div className={"px-4"}>
                        <h6>Lorem Ipsum is </h6>
                        <div style={{fontSize: 12}}>simply dummy text of the printing and typesetting</div>
                    </div>
                </div>
            </div>
            <div className={"container place-items-center grid grid-cols-1 md:grid-cols-3 gap-y-6"}>
                <div className={"text-center place-items-center"}>
                    <div className={"w-[95px] h-[95px] icon icon-group text-center w-100"}></div>
                    <div className={"font-semibold text-3xl my-2"}>1234</div>
                    <div className={"text-gray-500 text-center"}>Mamnun mijozlar</div>
                </div>
                <div className={"text-center place-items-center"}>
                    <div className={"w-[95px] h-[95px] icon icon-book text-center w-100"}></div>
                    <div className={"font-semibold text-3xl my-2"}>1234</div>
                    <div className={"text-gray-500 text-center"}>Kitoblar to'plami</div>
                </div>
                <div className={"text-center place-items-center"}>
                    <div className={"w-[95px] h-[95px] icon icon-pen text-center w-100"}></div>
                    <div className={"font-semibold text-3xl my-2"}>1234</div>
                    <div className={"text-gray-500 text-center"}>Mashhur yozuvchilar</div>
                </div>
            </div>
            <div className={"w-100 h-[100px] my-bg mt-5 flex justify-between items-center"}>
                <div className={"container flex justify-between items-center"}>
                    <div className={"h-[50px] w-10 icon icon-dots"}></div>
                    <div className={"h-10 w-10 icon icon-dots"}></div>
                </div>
            </div>
            <div className={"container place-items-center grid grid-cols-1 md:grid-cols-3 p-5 gap-y-10 gap-x-2"}>
                <div className={"w-100"}>
                    <div className={""}>
                        <div className={"icon icon-logo-yk w-[200px] h-[120px]"}>
                        </div>
                    </div>
                    <div className={"mt-3"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                </div>
                <div>
                    <h5>Bizning manzil</h5>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.27453972848767!2d69.25938961272516!3d41.32207475377407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3c90bc74311%3A0x400681c3f7236da3!2sYengil%20Yechim%20MCHJ!5e0!3m2!1sru!2s!4v1683191819016!5m2!1sru!2s"
                            width="100%" height="100" loading="lazy"
                            className={"rounded-2xl"}
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className={"flex mt-2"}><AiOutlinePhone color={"#6C5DD4"} size={25} className={" mx-2"}/>
                        <div>+998991234567</div>
                    </div>
                    <div className={"flex mt-2"}><BsGeoAlt color={"#6C5DD4"} size={25} className={" mx-2"}/>
                        <div>+998991234567</div>
                    </div>
                    <div className={"flex mt-2"}><AiOutlineMail color={"#6C5DD4"} size={25} className={" mx-2"}/>
                        <div>+998991234567</div>
                    </div>
                </div>
                <div className={"w-100 py-5 my-border text-center rounded-2xl"}>
                    <h5>Bizni ijtimoiy tarmoqlarda kuzating</h5>
                    <br/>
                    <div className={"flex justify-around"}>
                        <a href="">
                            <TiSocialYoutube color={"#ff0202"} size={50}/>
                        </a>
                        <a href="">
                            <div className={"icon-instagram w-10 h-10"}></div>
                        </a>
                        <a href="">
                            <FaTelegram color={"#1EAEDE"} size={50}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;
