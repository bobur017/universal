import React from 'react';
import {specialProductDto} from "./bookCards/SpecialProductDto";
import SpecialCard from "./allBookCards/SpecialCard";
import {forEach} from "react-bootstrap/ElementChildren";

function Carts() {
    const totalSum = () => {
        let sum = 0;
        specialProductDto.forEach((item, index) =>
            sum += item.price
        )
        return sum;
    }
    return (
        <div>
            <h1 className={"text-center mt-2 my-color"}>Savatcha</h1>
            <div
                className={"place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"}>
                {specialProductDto.map((item, index) =>
                    <div key={index}>
                        <SpecialCard specialProductDto={item}/>
                    </div>
                )}
            </div>
            <div> 5 ta kitob Jami: {totalSum()} so‘m</div>
            <div>
                <div className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 p-5"}>
                    <div className={"input-label sm:mt-3"}>Yetkazib berish manzilini kiriting</div>
                    <select className={"input-label pr-2 sm:mt-3"}>
                        <option value={1}>Viloyatni tanlang</option>
                    </select>
                    <select className={"input-label pr-2 sm:mt-3"}>
                        <option value={1}>Tumanni tanlang</option>
                    </select>
                    <input className={"input-style sm:mt-3"} placeholder={"Manzilni kiriting"}/>
                    <div className={"input-label md:mt-3 sm:mt-3"}>Yetkazib berish manzilini kiriting</div>
                    <input className={"input-style md:col-span-3 md:mt-3 sm:mt-3"} placeholder={"Manzilni kiriting"}/>
                    <div className={"input-label md:mt-3 sm:mt-3"}>Telefon raqamingizni kiriting</div>
                    <input className={"input-style md:col-span-3 md:mt-3 sm:mt-3"} placeholder={"+998"}/>
                    <div className={"input-label md:mt-3 sm:mt-3"}>Tasdiqlash codini kiriting</div>
                    <input className={"input-style md:col-span-3 md:mt-3 sm:mt-3"}
                           placeholder={"Olti xonali tasdiqlash kodini kiriting"}/>
                </div>
                <div className={"flex justify-center"}>
                    <button className={"my-bg-button text-center px-3"}>Buyurtma berish</button>
                </div>
            </div>
        </div>
    );
}

export default Carts;
