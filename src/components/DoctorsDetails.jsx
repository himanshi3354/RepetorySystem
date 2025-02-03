import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { useParams } from "react-router-dom";

// Sample doctor data
const doctorData = {
  "Asthma": [
    { name: "Dr. John Doe", img: "/appoin1.png", description: "Expert in respiratory diseases." },
    { name: "Dr. Jane Smith", img: "/appoin2.png", description: "Specialist in asthma treatments." }
  ],
  "Ear Infection": [
    { name: "Dr. Emily Stone", img: "/appoin1.png", description: "Ear and hearing expert." },
    { name: "Dr. Liam Green", img: "/appoin2.png", description: "Experienced ENT specialist." }
  ],
  "Allergies": [
    { name: "Dr. Emily Stone", img: "/appoin1.png", description: "Ear and hearing expert." },
    { name: "Dr. Liam Green", img: "/appoin2.png", description: "Experienced ENT specialist." }
  ],
  "Dermatitis": [
    { name: "Dr. John Doe", img: "/cancer.jpg", description: "Expert in skin diseases and treatments." },
    { name: "Dr. Jane Smith", img: "/appoin2.png", description: "Specialist in eczema and psoriasis." }
  ],
  "Arthritis": [
    { name: "Dr. Emily Stone", img: "/appoin1.png", description: "Expert in joint and muscle disorders." },
    { name: "Dr. Liam Green", img: "/allergies.jpg", description: "Specialist in osteoarthritis and rheumatoid arthritis." }
  ],
  "Fever": [
    { name: "Dr. John Doe", img: "/dermatitis.jpg", description: "Expert in infectious diseases and fever treatments." },
    { name: "Dr. Jane Smith", img: "/appoin2.png", description: "Specialist in viral and bacterial fevers." }
  ],
  "Nose Infection": [
    { name: "Dr. Emily Stone", img: "/appoin1.png", description: "Expert in nasal and sinus infections." },
    { name: "Dr. Liam Green", img: "/fever.jpg", description: "Specialist in ENT infections." }
  ],
  "High Blood Pressure": [],
  "Cancer": [],
  "COVID-19": []
};

const diseaseDescription = {
  "Asthma": "Asthma is a chronic condition that affects the airways in the lungs, causing difficulty in breathing, wheezing, and coughing. It is usually triggered by allergens or irritants in the environment.",
  "Ear Infection": "An ear infection occurs when the ear becomes inflamed due to bacteria or viruses, causing pain, discomfort, and sometimes hearing problems.",
  "Allergies": "Allergies are hypersensitive reactions to certain substances like pollen, dust, or food, causing symptoms such as sneezing, itching, and swelling.",
  "Dermatitis": "Dermatitis refers to inflammation of the skin, which may result in redness, itching, and rashes. Common types include eczema, psoriasis, and contact dermatitis.",
  "Arthritis": "Arthritis is a condition that causes inflammation and pain in the joints, making movement difficult. It includes osteoarthritis, rheumatoid arthritis, and gout.",
  "Fever": "Fever is a temporary increase in body temperature often due to an infection or illness, signaling that the body is fighting off harmful invaders.",
  "Nose Infection": "Nose infections, often linked to sinusitis or rhinitis, cause inflammation in the nasal passages, leading to congestion, pain, and mucus production.",
  "Cancer": "Cancer is a group of diseases characterized by uncontrolled cell growth and spread to other parts of the body. Common types include breast, lung, and prostate cancer.",
  "COVID-19": "COVID-19 is a viral infection caused by the SARS-CoV-2 virus. It primarily affects the respiratory system and can cause symptoms ranging from mild to severe, including fever, cough, and difficulty breathing."
};

const DoctorDetails = () => {
  const { disease } = useParams();
  const doctors = doctorData[disease] || [];
  const description = diseaseDescription[disease] || "No description available for this disease.";

  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: "url('/bghome.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      <div className="absolute inset-0 backdrop-blur-sm bg-gray/30"></div>

      <div className="relative p-6">
        <h1 className="text-center text-3xl font-bold text-blue-800">{disease} Doctors</h1>
        <p className="text-center text-lg text-gray-800 my-4">{description}</p>

        {doctors.length > 0 ? (
          doctors.map((doctor, index) => (
            <div
              className="group flex justify-between items-center p-6 bg-white/80 rounded-xl shadow-lg my-4 transition-all duration-300 hover:bg-gray-300 hover:shadow-xl hover:scale-105 cursor-pointer"
              key={index}
            >
              <img 
                src={doctor.img} 
                alt={doctor.name} 
                className="w-24 h-24 rounded-full transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold group-hover:text-blue-800 transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="group-hover:text-gray-700 transition-colors duration-300 mb-4">
                  {doctor.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <a href={`https://facebook.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaFacebookF className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                    <a href={`https://instagram.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaInstagram className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                    <a href={`https://twitter.com/${doctor.name}`} target="_blank" rel="noopener noreferrer">
                      <FaTwitter className="w-10 h-10 rounded-full bg-blue-800 text-white p-2 transition-all duration-300 hover:scale-110 hover:bg-blue-600" />
                    </a>
                  </div>
                  <button className="bg-blue-200 px-4 py-2 rounded-3xl transition duration-300 group-hover:bg-blue-200 group-hover:text-white">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center p-8 bg-white/80 rounded-xl">
            <p>No doctors available for this disease.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorDetails;