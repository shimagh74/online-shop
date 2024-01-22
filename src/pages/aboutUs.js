import aboutUs from './../assets/img/aboutUs.jpg'
const AboutUs = () => {
    return (
        <div className="w-full md:py-[80] py-5 flex mx-auto lg:flex-row flex-col md:mb-32">
            <div className="basis-[45%] pb-5">
                <img src={aboutUs} className="w-full"/>

            </div>
            <div className='basis-[55%] px-5'>
                <h1 className='font-bold text-4xl pb-5'>About Us</h1>
                <p className='py-3 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className='py-3 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                <p className='py-3 text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                 It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            </div>
             
        </div>
    )
    }
export default AboutUs;