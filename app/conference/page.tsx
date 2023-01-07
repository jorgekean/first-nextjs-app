import Link from "next/link";


export default function Page() {

    return (
        <>
            {/* <h1>Conference Page</h1> */}
            <h2><Link href="/home">Back to Home</Link></h2>
            <h2><Link href="/conference/sessions">Sessions</Link></h2>
            <h2><Link href="/conference/speakers">Speakers</Link></h2>

        </>
    )
}