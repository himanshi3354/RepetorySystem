import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, 
  FaInstagram, FaPhoneAlt, FaMapMarkerAlt, 
  FaEnvelope, FaRegClock 
} from "react-icons/fa";

const Doctors = () => {
  return (
    <>
      <div className="relative w-full h-[25vh]">
  
      <img
        src="/doctor.jpg"
        alt="about"
        className="w-full h-full object-cover"
      />

  {/* Overlay Text and Navigation */}
  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center justify-start items-start bg-white bg-opacity-30">
    {/* Navigation */}
    <div className="absolute top-4 left-4 flex space-x-4 text-white text-lg">
      <a href="/" className="hover:underline text-blue-800">Home</a> /
      <a href="/about" className="hover:underline text-blue-800">About Us</a> /
      
      <span className="text-blue-800">Doctors</span>
     
    </div>
    <p className="text-blue-900 font-bold text-2xl ml-4 mt-10">Our Doctors</p>

  </div>
  
</div>



<h1 className="text-3xl text-blue-800 ml-28 mt-4">Meet Our Best Doctors</h1>

<div className="flex justify-center gap-8 mt-6">
                {[
                  { name: "Doctor's Name", specialty: "NEUROLOGIST", img: "/card1.png" },
                  { name: "Doctor's Name", specialty: "UROLOGIST", img: "/card2.png" },
                  { name: "Doctor's Name", specialty: "ONCOLOGIST", img: "/card3.png" },
                ].map((doctor, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-6 w-80 h-[500px] text-center flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={doctor.img}
                      alt={doctor.name}
                      className="w-full h-4/5 object-cover"
                    />
                    <div className="bg-blue-300 p-4 w-full">
                      <p className="text-xl font-semibold text-blue-800">{doctor.name}</p>
                      <p className="text-gray-600">{doctor.specialty}</p>
                      <div className="flex gap-4 justify-center mt-4">
                        <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-blue-800 transition">
                          <FaFacebookF className="text-lg" />
                        </div>
                        <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition">
                          <FaTwitter className="text-lg" />
                        </div>
                        <div className="bg-blue-800 text-white p-2 rounded-full cursor-pointer hover:bg-blue-900 transition">
                          <FaLinkedinIn className="text-lg" />
                        </div>
                      </div>
                    </div>
                    <button className="bg-blue-800 text-white py-2 w-full hover:bg-blue-600 transition duration-300">
                      View Profile
                    </button>
                  </div>
                ))}
        </div>

        <div className="relative w-full h-[50vh] mt-8">
        {/* Background Image */}
        <img
          src="/about3.jpg"
          alt="about"
          className="w-full h-full object-cover"
        />

        {/* Gray-700 Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-80"></div>

        {/* Text Content (on top of overlay) */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-gray-400 text-center px-6 transition duration-300 hover:text-gray-600">
          
          <img
          src="/quote.png"
          alt="about"
          className=""/>
          <br />
          <p className="text-lg max-w-3xl">
            Homeopathy, developed by Dr.Samuel Hahnemann in the 
          </p>
          <p>18th century, is a natural and holistic medicine system</p>
          <p>based pn the principle "like curse like." It uses highly diluted</p>
          <p>substances to treat symptoms.</p>
          <br />

          <h2>Dr. Samuel Hahnemann</h2>
        
          <div className="flex gap-2">
          <img
          src="/circle.png"
          alt="about"
          className="text-white"/>
          <img
          src="/circle.png"
          alt="about"
          className=""/>
          <img
          src="/circle.png"
          alt="about"
          className="text-white"/>
          </div> 
        </div>
      </div>

      <div>
                <p className="text-center text-blue-400 mt-12">GET IN TOUCH</p>
                <h1 className="text-center text-blue-800 font-bold text-3xl">Contact</h1>
              </div>
        
              {/* Contact Cards */}
              <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-14 mx-9 my-20 ml-14 mr-14">
                <div className="bg-blue-300 p-10 rounded-lg text-gray-500 flex flex-col">
                  <FaPhoneAlt className="text-4xl mb-4" />
                  <div className="text-start">
                    <p className="font-bold text-2xl text-blue-800">EMERGENCY</p>
                    <p className="text-gray-600">(+91) 681-812-255</p>
                    <p className="text-gray-600">(+91) 681-678-346</p>
                  </div>
                </div>
        
                <div className="bg-blue-300 p-10 rounded-lg text-gray-500 shadow-lg flex flex-col">
                  <FaMapMarkerAlt className="text-4xl mb-4" />
                  <div className="text-start">
                    <p className="font-bold text-2xl text-blue-800">LOCATION</p>
                    <p className="text-gray-600">0123 some place</p>
                    <p className="text-gray-600">9876 some country</p>
                  </div>
                </div>
        
                <div className="bg-blue-800 p-10 rounded-lg text-gray-500 shadow-lg flex flex-col">
                  <FaEnvelope className="text-4xl mb-4" />
                  <div className="text-start">
                    <p className="font-bold text-2xl text-blue-400">EMAIL</p>
                    <p className="text-gray-400">Paruluniversity.ac.in</p>
                    <p className="text-gray-400">Paruluniversity.ac.in</p>
                  </div>
                </div>
        
                <div className="bg-blue-300 p-10 rounded-lg text-gray-500 flex flex-col">
                  <FaRegClock className="text-4xl mb-4" />
                  <div className="text-start">
                    <p className="font-bold text-2xl text-blue-800">WORKING HOURS</p>
                    <p className="text-blue-400">24*7</p>
                    <p className="text-blue-600">365 Days</p>
                  </div>
                </div>
              </div>
        
              {/* Additional Cards with Black Lines */}
              <div className="my-20 flex bg-blue-800">
                {/* Extra Cards */}
                {[
                  { title: "REPERTORY HOMEOPATHIC PRACTITIONER", desc: ["Leading the way in Homeopathic", "Excellence, Trusted Care."] },
                  { title: "Important Links", desc: ["Appointment", "Doctors", "Services", "About Us"] },
                  { title: "Contact Us", desc: ["Call: +91 566-785-5623", "Email: fildineesoe@gmail.com", "Address: 0123 some place", "Some country"] },
                ].map((item, index) => (
                  <div key={index} className="p-4 text-gray-500 flex flex-col bg-blue-800 min-h-[350px] w-1/4">
                    <p className="font-bold text-2xl text-gray-400 p-7">{item.title}</p>
                    {item.desc.map((line, i) => (
                      <p key={i} className="ml-8 text-gray-400 text-xl">{line}</p>
                    ))}
                  </div>
                ))}
        
                {/* Newsletter */}
                <div className="bg-blue-800 p-10 text-gray-500 flex flex-col min-h-[350px] w-1/4">
                  <p className="font-bold text-2xl text-gray-400">Newsletter</p>
                  <button className="mt-4 bg-blue-400 text-black py-2 px-6 w-full hover:bg-blue-600 transition duration-300">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="bg-transparent outline-none text-black placeholder-gray-300 w-full text-center"
                    />
                  </button>
                </div>
              </div>
        
              {/* Gray Line */}
              <hr className="border-gray-500 my-6 mx-12" />

      
            
            </>
    
            
  )
}

export default Doctors