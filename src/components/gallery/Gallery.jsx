function Gallery () {
    const links = ["https://ca-times.brightspotcdn.com/dims4/default/da55844/2147483647/strip/true/crop/2821x1881+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F79%2F147c550e25a56197452c1d8136d8%2F5fa8301429ca482f9421453a82d6d4c6",
    "https://ca-times.brightspotcdn.com/dims4/default/da55844/2147483647/strip/true/crop/2821x1881+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F79%2F147c550e25a56197452c1d8136d8%2F5fa8301429ca482f9421453a82d6d4c6",
    "https://ca-times.brightspotcdn.com/dims4/default/da55844/2147483647/strip/true/crop/2821x1881+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F79%2F147c550e25a56197452c1d8136d8%2F5fa8301429ca482f9421453a82d6d4c6",
    "https://ca-times.brightspotcdn.com/dims4/default/da55844/2147483647/strip/true/crop/2821x1881+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F79%2F147c550e25a56197452c1d8136d8%2F5fa8301429ca482f9421453a82d6d4c6"
    ];

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-5 px-5 sm:px-[50px] md:px-[60px] xl:px-[17%]">
                {links.map(val => <img className="h-auto max-w-full rounded-lg" src={val} alt="some"/>)}
            </div>
        </>

    )
}

export default Gallery;
