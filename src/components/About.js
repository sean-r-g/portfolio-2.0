const About = () => {
    
    return (
        <>
    <div class="bio-container" id="bio">
        <h2 id="about-title">A Little About Me</h2>
      <div class="bio-section" id='background'>
        <article class="bio-article">
          <h3>Background</h3>
          <p>Welcome! I'm Sean Gillis, a software engineer with over five years experience working in the tech industry. I've spent the past several years leading teams of developers, data engineers, and analysts as a project manager -- and now I want be a part of those very teams.</p>
          <p>I've been playing with and working on computers since before grade school, and have carried that passion with me into my professional career. Now, I'm working to make this lifelong passion a focal point of my career.</p>
          <p>Since graduating from Boston College in 2016, I've moved from one tech hub to another, starting with the city of Boston itself. From there, I moved to Madison, Wisconsin to experience their burgeoning tech scene while working for a leading healthcare software company. Recently, I relocated to one of the hottest cities in the tech industry -- Austin, Texas -- where I will look to further my career as a software engineer.</p>
        </article>
        <div className="bio-spacer"></div>
        {/* <img id="comp-img" src="../images/comp-clipart.png"></img> */}
    </div>
    <div class="bio-section" id='passions'>
        {/* <img src="../images/color-globe-modified.png"></img> */}
        <div className="bio-spacer"></div>
        <article class="bio-article">
          <h3>Passions</h3>
          <p>Two of my greatest passions, both personally and professionally, are education and community service. Regardless of my current position or organization, I am constantly looking to integrate these concepts into my daily work and life. It's essential for me to be making a positive impact on my community, be it directly or indirectly.</p>
          <p>I believe it is crucial to view things with a global perspective whenever possible. Growing up in the multi-cultural mecca of Singapore, I learned early and often that one often hinders themself by approaching challenges with a myopic view of the world.</p>
        </article>
    </div>
    <div class="bio-section" id='hobbies'>
      <article class="bio-article">
        <h3>Hobbies</h3>
        <li>Outdoor Activities: Hiking, cycling, basketball</li>
        <li>Reading (I love all things fanstasy and sci-fi, as well as history)</li>
        <li>Cooking</li>
        <li>Gaming (table-top and video)</li>
        <li>All things Boston sports (go Pats!)</li>
        <li>Geography - give me a map and I'll be entertained for hours</li>
      </article>
      <div className="bio-spacer"></div>
      {/* <img id="cooking-img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F23%2F2020%2F01%2F02%2Fcooking.jpg"></img> */}
    </div>
  </div>
        </>
    )
}

export default About