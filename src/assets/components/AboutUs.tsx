const AboutUs = () => {
    return(
        <div className="py-12 m-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://i.ibb.co/r5mnWc8/Screenshot-227.png"
              alt="Worker"
              className="max-w-full rounded shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About Us
            </h2>
            <p className="text-gray-600 mb-6">
              Everyone has a vision of their dream home or work shop a space filled with special features and lasting impressions. At united Build pro Pvt ltd we bring those dreams to lifes. Even if you are unsure of waht you want our team of experts know the right questions to ask and to uncover your desires and create a space that uniquely yours.
               
            </p>

            <p className="text-gray-600 mb-6">
              Every project we undertake is a hormonious blend of our clients vision and ouur design expertize. we focus on creating spaces that not only meet expectations but exceed them, offering a seemless integration of style and functionality eneral term meaning the art and science to form object systems 
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-300"
            >
              Know more
            </a>
          </div>
    
        </div>
      </div>
    )
}

export default AboutUs;