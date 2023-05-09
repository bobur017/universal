import React from 'react';
import "./styles/index2.scss"
import {Link, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Comment from "./pages/Comment";
import 'swiper/swiper-bundle.min.css';
import 'swiper/css';
import {Dropdown} from "react-bootstrap";
import {AiOutlineAppstore, AiOutlineDown, AiOutlineSearch} from "react-icons/ai";
import {TiShoppingCart} from "react-icons/ti";
import {BsFillBagHeartFill} from "react-icons/bs";
import Carts from "./pages/Carts";
import Orders from "./pages/Orders";
import {getLinks, getRoleStorge} from "./pages/functions/Functions";
import Categories from "./pages/fromAdmin/Categories";
import Products from "./pages/fromAdmin/Products";

function App() {
    const dropdownMenuStyle = {
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderColor: '#6C5DD4',
        color: "#6C5DD4",
        borderBottomLeftRadius: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        height: "100%",
    }
    return (
        <div className={"all"}>
            <nav
                className={"sticky-top top-0 bg-white shadow hidden md:flex navbar-style flex md:px-8 xs:px-5 justify-between py-[20px]"}>
                <div className={"pl-2 flex w-[10%] icon-logo-yk mr-1"}>
                </div>
                <div className={"flex w-[50%] justify-center"}>
                    <div className={"flex  w-[100%]"}>
                        <Dropdown>
                            <Dropdown.Toggle bsPrefix={"'dropdown-toggle'"} style={dropdownMenuStyle}>
                                <div className={"flex items-center"}>
                                    <AiOutlineAppstore size={25}/> <span className={"mx-1"}>Menyu</span>
                                    <AiOutlineDown/>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <input type="text" className={"input-search lg:w-[70%]"}/>
                        <div className={"my-border flex items-center rounded-tr-md rounded-br-md px-2"}>
                            <AiOutlineSearch size={25} color={"#6C5DD4"}/>
                        </div>
                    </div>
                </div>
                <div className={"flex w-[40%] justify-around items-center"}>
                    <button className={"my-w-button flex px-2"}>Kirish</button>
                    <button className={"my-bg-button px-2"}><Link to={"/orders"}
                                                                  className={"no-link text-white"}> Mening
                        buyurtmalarim</Link></button>
                    <Link to={"/carts"} className={"no-link-color"}> <TiShoppingCart size={30}
                                                                                     color={"#6C5DD4"}/></Link>
                </div>
            </nav>
            <div className={"mt-0 mb-20 md:mb-0 sm:mt-20 "}>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/comment"} element={<Comment/>}/>
                    <Route path={"/posts"} element={<Posts/>}/>
                    <Route path={"/carts"} element={<Carts/>}/>
                    <Route path={"/orders"} element={<Orders/>}/>
                    <Route path={"/categories"} element={<Categories/>}/>
                    <Route path={"/products"} element={<Products/>}/>
                </Routes>
            </div>
            <nav className={"position-fixed md:hidden z-10 bottom-0 w-100 bg-white shadow-2xl shadow-black"}>
                {
                    getLinks(getRoleStorge())
                }
                {/*<ul className={"flex justify-around items-center place-items-center text-center pl-0 mb-0"}>*/}
                {/*    <li className={"p-2"}>*/}
                {/*        <Link to={"/"} className={"no-link-color"}>*/}
                {/*            <div className={"icon-logo-yk w-10 h-10"}></div>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className={"p-2 text-sm my-color"}>*/}
                {/*        <Link to={"/categories"} className={"no-link-color"}>*/}
                {/*            <div className={"w-100 flex justify-center"}><AiOutlineSearch size={25} color={"#6C5DD4"}/>*/}
                {/*            </div>*/}
                {/*            <div>Qidirish</div>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className={"p-2 text-sm my-color"}>*/}
                {/*        <Link to={"/carts"} className={"no-link-color"}>*/}
                {/*            <div className={"w-100 flex justify-center"}><TiShoppingCart size={25} color={"#6C5DD4"}/>*/}
                {/*            </div>*/}
                {/*            <div>Savatcha</div>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*    <li className={"p-2 text-sm my-color"}>*/}
                {/*        <Link to={"/orders"} className={"no-link-color"}>*/}
                {/*            <div className={"w-100 flex justify-center"}><BsFillBagHeartFill size={25}*/}
                {/*                                                                             color={"#6C5DD4"}/></div>*/}
                {/*            <div>Buyurtmalarim</div>*/}
                {/*        </Link>*/}
                {/*    </li>*/}
                {/*</ul>*/}
            </nav>
        </div>
    );
}

export default App;
