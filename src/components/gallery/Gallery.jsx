function Gallery () {
    const links = ["https://ca-times.brightspotcdn.com/dims4/default/da55844/2147483647/strip/true/crop/2821x1881+0+0/resize/1200x800!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fec%2F79%2F147c550e25a56197452c1d8136d8%2F5fa8301429ca482f9421453a82d6d4c6",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcIn1xlkKLgNKIJwSTn1-wnPEOJcR1tzGdlS37YPri7Q&s",
        "https://image-service.onefootball.com/transform?w=280&h=210&dpr=2&image=https%3A%2F%2Faficioncentral.com%2Fuploads%2Ffutbol-ecuatoriano%2F2024%2Fmarzo%2Fdaniel-molineros-api-ligapro-liga-deportiva-universitaria-macara.jpg",
        "https://cdn.conmebol.com/wp-content/uploads/2023/10/IMG_3621-1024x683.jpg"
    ];

    return (
        <>
            <div className={"show-event-imgs"}>
                {links.map(val => <img className={"per-image"} src={val} alt={"text here"}/>)}
            </div>
        </>

    )

}

export default Gallery