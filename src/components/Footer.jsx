import { 
    FaFacebookF,  FaLinkedinIn, 
    FaInstagram
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex justify-between items-center px-14 py-6 bg-blue-800 text-gray-400">
  {/* Footer Left - Paragraph */}
  <p className="text-lg">© 2024 Hospital's name. All Rights Reserved by PNTEC-LTD</p>

  {/* Footer Right - Social Icons */}
  <div className="flex gap-6">
    <a href="#" className="text-gray-300 hover:text-blue-500 transition">
      <div className="bg-blue-600 p-3 rounded-full">
        <FaFacebookF className="text-2xl" />
      </div>
    </a>
    <a href="#" className="text-blue-800 hover:text-blue-200 transition">
      <div className="bg-blue-500 p-3 rounded-full">
        <FaInstagram className="text-2xl" />
      </div>
    </a>
    <a href="#" className="text-gray-200 hover:text-blue-700 transition">
      <div className="bg-blue-400 p-3 rounded-full">
        <FaLinkedinIn className="text-2xl" />
      </div>
    </a>
  </div>
</div>

  )
}

export default Footer