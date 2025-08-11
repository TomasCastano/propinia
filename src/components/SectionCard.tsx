type SectionCardProps = {
    title: string
    children: React.ReactNode
    className?: string
}

const SectionCard = ({ className, title, children } : SectionCardProps) => {
    return (
        <section className={"bg-white flex flex-col gap-6 rounded-xl p-4 md:p-6 lg:p-8 shadow-xl border-0 w-full " + className}>
            <h2 className="text-xl font-bold flex items-center gap-3">{title}</h2>
            {children}
        </section>
    )
}

export default SectionCard