import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, 
  FaInstagram, FaPhoneAlt, FaMapMarkerAlt, 
  FaEnvelope, FaRegClock 
} from "react-icons/fa";


const OurDoctors = () => {
  return (
    <div>
      <p className="text-blue-400 text-center mt-12">TRUSTED CARE</p>
      <h1 className="text-3xl text-blue-800 font-bold text-center">Our Doctors</h1>

      {/* Doctor Cards */}
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

      {/* Contact Section */}
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


    </div>
  );
};

export default OurDoctors;
