export default function Companies() {
    const logos = [
        { name: "hotjar", icon: <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg> },
        { name: "loom", icon: <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg> },
        { name: "lattice", icon: <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" /></svg> },
        { name: "evernote", icon: <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" /></svg> },
        { name: "hotjar", icon: <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg> },
    ];

    return (
        <section className="bg-white py-16 relative z-20 overflow-hidden">
            <div className="mx-auto max-w-[2000px]">
                <div className="flex w-[200%] animate-infinite-scroll">
                    {/* First set of logos */}
                    <div className="flex w-1/2 justify-around items-center grayscale opacity-50 hover:grayscale-0 transition-all duration-500 gap-12">
                        {logos.map((logo, i) => (
                            <span key={i} className="text-3xl font-bold font-sans flex items-center gap-4 text-slate-500 whitespace-nowrap">
                                {logo.icon}
                                {logo.name}
                            </span>
                        ))}
                    </div>
                    {/* Duplicate set for seamless loop */}
                    <div className="flex w-1/2 justify-around items-center grayscale opacity-50 hover:grayscale-0 transition-all duration-500 gap-12">
                        {logos.map((logo, i) => (
                            <span key={`dup-${i}`} className="text-3xl font-bold font-sans flex items-center gap-4 text-slate-500 whitespace-nowrap">
                                {logo.icon}
                                {logo.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
