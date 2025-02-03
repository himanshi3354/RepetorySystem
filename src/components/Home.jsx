import Disease from "./Disease";
import OurDoctors from "./OurDoctors";
const Home = () => {
  return (
    <>
      

      <div
        className="bg-cover bg-center w-full flex items-start justify-start p-8 relative"
        style={{ height: "50vh", backgroundImage: "url('/bghome.png')" }}
      >
        <div className="text-left p-10">
          <h4 className="text-blue-300 text-xl font-sans">CARING FOR <br />LIFE</h4>
          <p className="text-3xl text-blue-800">
            Leading the way in  
            <br />
            <span className="text-blue-800">Homeopathic</span> <br />
            <span className="text-blue-800">Excellence</span>.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 flex">
          <button className="text-white rounded bg-blue-800 px-12 py-6 transition duration-200 flex items-center gap-16">
            <a href="#related-section" className="text-white hover:underline">
              Scheduling
            </a>
            <img src="/nav1.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </button>

          <button className="text-white rounded bg-blue-300 px-12 py-6 transition duration-200 flex items-center gap-16">
            <a href="#scheduling" className="text-white hover:underline">
              Scheduling
            </a>
            <img src="/nav2.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </button>

          <button className="text-white rounded bg-blue-400 px-12 py-6 transition duration-200 flex items-center gap-16">
            <a href="#related-section" className="text-white hover:underline">
              Scheduling
            </a>
            <img src="/nav3.png" alt="Icon" className="w-6 h-6 cursor-pointer" />
          </button>
        </div>
      
    </div>
      <div className="mt-6 px-8 py-10 flex flex-col items-center justify-center text-center gap-2">
        <h3 className="text-1xl font-bold text-blue-300">WELCOME TO REPERTORY HOMEOPATHIC PRACTITIONER</h3>
        <h2 className="text-3xl font-bold text-blue-800">A Great Place to Receive Care</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Homeopathy is a gentle and natural system of healing that focuses on treating the whole person, not just the symptoms. It is based on the principle that "like cures like," meaning a substance causing symptoms in a healthy individual can help treat similar symptoms in someone unwell when used in highly diluted forms.
        </p>
        <p className="mt-6 text-blue-500 text-lg font-semibold flex items-center gap-2 cursor-pointer hover:underline">
          <a href="/learn-more">Learn More</a>
          <span className="text-2xl text-black">→</span>
        </p>
        <img
          src="/Group.png"
          alt="Repertory Homeopathic Practitioner"
          className="mt-8 w-full max-w-2xl rounded-lg"
        />
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <h3 className="text-1xl font-bold text-blue-300 mb-2">CARE YOU CAN BELIEVE IN</h3>
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Services</h2>
        </div>

        <div className="mt-10 px-6 flex items-start gap-32">
  {/* Left Side Content */}
  <div className="w-1/2 flex flex-col px-4 py-6 ml-28">
    <h1 className="text-2xl font-bold text-left mb-4">A passion for putting patients first.</h1>
    <div className="grid grid-cols-2 gap-4 mt-2 text-xl">
      <ul className="list-disc ml-6 custom-bullets">
        <li>A Passion for Healing</li>
        <li>All our best</li>
        <li>A Legacy of Excellence</li>
      </ul>
      <ul className="list-disc ml-6 custom-bullets">
        <li>5-Star Care</li>
        <li>Believe in Us</li>
        <li>Always Caring</li>
      </ul>
    </div>
    <p className="mb-8 mt-6 text-xl text-justify">
      Homeopathy thrives on the principle of individualized care, placing the patient at the center of every treatment. With a commitment to understanding each person's unique physical, emotional, and mental health, homeopathy offers a holistic approach that focuses on restoring balance and harmony.
    </p>
    <p className=" mt-2 text-xl text-justify">
      Driven by compassion and a dedication to gentle, natural healing, homeopathy ensures that every remedy is tailored to the patient’s specific needs, always prioritizing their well-being. At its core, homeopathy is more than a system of medicine—it’s a commitment to putting patients first.
    </p>
  </div>

  {/* Right Side Images */}
  <div className="w-1/3 flex flex-col gap-10 px-4 py-6 ml-auto mr-6">
    <img
      src="/medical.png"
      alt="Healthcare Team"
      className="w-full max-w-xs h-auto rounded-lg"
    />
    <img
      src="/doctor.png"
      alt="Patient Care"
      className="w-full max-w-xs h-auto rounded-lg"
    />
  </div>
</div>
</div>
<Disease/>
<OurDoctors/>

    </>
  );
};

export default Home;
