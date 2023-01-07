// 'use client'


import axios from "axios";
import Link from "next/link";
// import "../pages/api/entry/[id]"



export default async function Page() {


    var res: any = await axios.get(`http://localhost:3000/api/entry/home`);//await axios.get(`/api/entries`)

    // console.log(res);
    return (
        <>
            <h1>Home</h1>
            <p>aaa {res.data.homeLight1.toString()}</p>
            <Link href="/home">Home Page</Link>

            <form action="/send-data-here" method="post">
                <div>
                    <label htmlFor="lightHome1">Light Home 1:</label>
                    <input type="checkbox"
                        id="lightHome1"
                        name="first"
                        checked={res.data.homeLight1}
                    // onChange={() => { }}
                    />
                </div>
                <div>
                    <label htmlFor="lightWarren1">Light Warren 1:</label>
                    <input type="checkbox" id="lightWarren1" name="first" checked={res.data.warrenLight1} />
                </div>
                {/* <button type="submit">Submit</button> */}
            </form>
        </>
    )
}