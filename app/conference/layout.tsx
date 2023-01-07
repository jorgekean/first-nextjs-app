export default function ConferenceLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <header>
                <h1>Conference</h1>
            </header>
            <section>{children}</section>
        </>
    )
}
