function About() {
  return (
    <div className=" h-full pt-16 bg-[#f4f3f2]">
      <div className="mx-16">
        <div className="text-charcoal">
          <h1 className="text-2xl ">
            Hello there! Welcome to our Fitness Tracker
          </h1>
        </div>
        <div className="mx-8">
          <div className="text-charcoal mt-8">
            <h2>
              There's Christian, our backend maestro. He's the coding virtuoso
              who brings functionality to life. His expertise in server-side
              development and database management is the backbone of our
              projects.
            </h2>
          </div>
          <div className="text-charcoal mt-8">
            Then we have Mahamad and Kenny, our brilliant frontend duo. These
            two wizards of web design craft the user interfaces that captivate
            and engage. With their mastery of HTML, CSS, and JavaScript, they
            turn pixels into an immersive experience.
          </div>

          <div className="text-charcoal mt-8">
            Together, with the support and collaboration of our colleagues at
            TKH, we crafted a solution that seamlessly integrates technology
            with wellness.
          </div>
          <div className="text-charcoal mt-8">
            Join us as we continue to push the boundaries of innovation, one
            project at a time. Together, we're not just building software –
            we're building a better future, one line of code at a time.
          </div>
          <div
            className="mx-auto  w-fit  mt-16
justify-center items-center
flex content-center flex-col ml:flex-row "
          >
            <div className="text-center w-fit pb-8 mx-16 text-charcoal ">
              <div className="bg-PrussianBlue  w-48 h-48 rounded-full"></div>
              Christian
            </div>
            <div className="text-center w-fit pb-8 mx-16  text-charcoal ">
              <div className="bg-PrussianBlue  w-48 h-48 rounded-full"></div>
              Kenny
            </div>
            <div className="text-center w-fit pb-8 mx-16  text-charcoal">
              <div className="bg-PrussianBlue w-48 h-48 rounded-full"></div>
              Mahamad
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
