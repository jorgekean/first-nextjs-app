import Link from "next/link";


export default function Page() {

    return (
        <>
            <h1>Home Page</h1>
            <h2><Link href="/">HOME</Link></h2>
            <h2><Link href="/conference">Conference</Link></h2>
            <h2><Link href="/settings">Settings</Link></h2>

        </>
    )
}