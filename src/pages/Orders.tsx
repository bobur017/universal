import React from 'react';
import {Table} from "react-bootstrap";
import {specialProductDto} from "./bookCards/SpecialProductDto";

function Orders() {

    const styleStatusButton = (name: string | null | undefined): string => {
        if (name === "To'landi") {
            return "#9BFECC"
        } else if (name === "Yetkazib berildi") {
            return "#9FA2FF"
        } else if (name === "Bekor qilindi") {
            return "#FF9494"
        } else {
            return "#C5EBFF"
        }
    }
    const styleStatusButtonText = (name: string | null | undefined): string => {
        if (name === "To'landi") {
            return "#369F6A"
        } else if (name === "Yetkazib berildi") {
            return "#392690"
        } else if (name === "Bekor qilindi") {
            return "#801414"
        } else {
            return "#C5EBFF"
        }
    }
    const styleTableBGx = (name: string | null | undefined): string => {
        if (name === "To'landi") {
            return "#DCFFEE"
        } else if (name === "Yetkazib berildi") {
            return "#E9E9FF"
        } else if (name === "Bekor qilindi") {
            return "#FFE9E9"
        } else {
            return "#C5EBFF"
        }
    }
    return (
        <div>
            <h1 className={"my-color text-center"}>Mening buyurtmalarim</h1>
            <div className={"p-3"}>
                <Table size={"sm"} className={"text-center"}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Kitoblar soni</th>
                        <th>Manzil</th>
                        <th>Summa</th>
                        <th>Holati</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        specialProductDto.map((item, index) =>
                            <tr key={index} className={`place-items-center`}
                                style={{backgroundColor: styleTableBGx(item.status)}}>
                                <td>{index + 1}</td>
                                <td>{item.author}</td>
                                <td>{item.author}</td>
                                <td>{item.author}</td>
                                <td>
                                    {item.status !== null ? <button className={"p-2"} style={{
                                        backgroundColor: styleStatusButton(item.status),
                                        color: styleStatusButtonText(item.status),
                                        borderRadius: 8
                                    }}>{item.status}</button> : <div className={"flex"}>
                                        <button className={"mx-2 p-2"}
                                                style={{backgroundColor: "#00F20A", borderRadius: 8}}>To'lov qilish
                                        </button>
                                        <button style={{backgroundColor: "#FF1212", borderRadius: 8}}
                                                className={"p-2"}>Bekor qilish
                                        </button>
                                    </div>}
                                </td>
                            </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Orders;
