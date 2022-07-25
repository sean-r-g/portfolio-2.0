import Icons from "./Icons"
const Intro = () => {

    return (
        <>
            <div className="intro-div">
                <div className="headshot-div">
                    <img src="https://media-exp2.licdn.com/dms/image/C4D03AQE-krf4WkYdlw/profile-displayphoto-shrink_400_400/0/1619887251315?e=1661990400&v=beta&t=MSwjHDkJmxNYmGOkwiytztEZzXXPkyqojVVCKolVoNo"/>
                </div>
                <div class='brand-div'>
                    <p class="brand-p">
                    I'm a full-stack software engineer who has spent the last five years managing complex technical projects and enterprise software implementations. I seek out and tackle high-value, complex problems that will improve the success and happiness of my clients and teams. Now, I'm looking to hone my development skills to further improve stakeholder success and efficiency.
                    </p>
                    {/* <h5><a href="https://drive.google.com/file/d/1585xCX_5SCzyMgZYz-4sWKZKFnUwiS82/view?usp=sharing">View Resume</a></h5> */}
                </div>
            </div>
            <div id="icon-div">
                <Icons/>
            </div>
        </>
    )
}

export default Intro