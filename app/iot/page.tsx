'use client'


import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
// import "../pages/api/entry/[id]"



export default function Page() {
    const formDefaultVal = {
        homeLight1: false,
        warrenLight1: false
    }

    // const [res, setRes] = useState({ data: formDefaultVal });
    const [formState, setFormState] = useState<any>(formDefaultVal);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // const inputElement = useRef(); 

    useEffect(() => {
        async function fetchData() {

            setIsLoading(true)
            var res: any = await axios.get(`/api/entry/home`);//await axios.get(`/api/entries`)
            console.log(res.data.body)

            const { homeLight1, warrenLight1 } = res.data.body;
            setFormState({ homeLight1, warrenLight1 });

            setIsLoading(false)
            console.log(formState, "state")
        } fetchData();

    }, []);

    // useEffect(() => {
    //     // console.log("submitting");
    //     // onSubmit();
    // }, [JSON.stringify(formState)])

    const onChange = async (e: any) => {
        const { checked, name } = e.target;
        console.log(e.target, e.target.name, checked)
        setFormState((prevState: any) => ({
            ...prevState,
            [name]: checked
        }));
    }

    const onSubmit = async (e: any) => {
        e.preventDefault();

        console.log(formState)
        setIsLoading(true)
        // alert()
        // update server data
        await axios.put(`/api/entry/home`, {
            //   slug: dashify(title),
            //   title,
            body: formState,
        });
        setIsLoading(false)
    }
    // console.log(res);
    return (
        <>
            <h1>Home</h1>
            {/* <p>aaa {res.data.homeLight1.toString()}</p> */}
            <Link href="/home">Home Page</Link>

            {/* {isLoading ? <p>Loading ...</p> : */}
            <form onSubmit={(e: any) => onSubmit(e)}>

                <div>
                    <label htmlFor="homeLight1">Home Light 1:</label>
                    <input type="checkbox"
                        // id="homeLight1"
                        name="homeLight1"
                        disabled={isLoading}
                        // defaultChecked={formState.homeLight1}
                        checked={formState.homeLight1}
                        onChange={(e: any) => onChange(e)}
                    />
                </div>
                <div>
                    <label htmlFor="warrenLight1">Warren Light 1:</label>
                    <input type="checkbox"
                        // id="warrenLight1"
                        name="warrenLight1"
                        disabled={isLoading}
                        checked={formState.warrenLight1}
                        onChange={(e: any) => onChange(e)}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>


        </>
    )
}