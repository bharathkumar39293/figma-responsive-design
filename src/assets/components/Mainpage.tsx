import React from "react";

const Mainpage = () => {
  return (
    <div className="font-sans">
      <div className="bg-gray-800 text-white text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-2 px-4">
          <div className="w-full sm:w-auto mb-2 sm:mb-0 text-center">
            <span className="mr-4">📞 9731125090, 9731125090</span>
            <span>📧 Unitedbuildpro@gmail.com</span>
          </div>
          <div className="w-full sm:w-auto text-center sm:text-left">
            #63/A, E Block, 2nd Stage, Dr. Rajkumar Road, Bangalore-560010
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex flex-wrap justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <img src="https://s3-alpha-sig.figma.com/img/b86d/1bcc/0f44fadc0e91371a9ead0677d80eb02f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OH~ER05wbvViDIHAFKW25gupyUDQcBoh6TDcExcw7Yiw7RTY9OuKB3-NujBSZnXVHUpseEXVBbjOQG06XQRkcUmghyGiI1GjSQFe63bqpfWDpOalf~EBPv4SDwN8K4aSasWaAuRWfTMaVIISbUr2mUELnEXmUr8qp-Hi-bweQ6dxYOnS-y~FBEnQNF-LjSCbheA1u5LZQJ~hYzRe5BsLsrRfL3rmlkH4Qa1E~FiI3FHjzSyyJa5RGZDQ1V3YEGZefI6YYeU8CSpI4lwGzJWEetWdkhKDPGldAU5qO5BGidW-yMLMdNDkaQJDJmmws-3DChig1iyReHrx8RG6Cma3sQ__" alt="Logo" className="h-10 mr-3" />
            <h1 className="text-2xl font-bold text-gray-800">
              United BuildPro Pvt Ltd
            </h1>
          </div>
          <nav className="flex flex-wrap space-x-6 text-gray-800 mt-4 sm:mt-0">
            <a href="#Home" className="hover:text-blue-600">
              Home
            </a>
            <a href="#About Us" className="hover:text-blue-600">
              About Us
            </a>
            <a href="#Services" className="hover:text-blue-600">
              Services
            </a>
            <a href="#Contact Us" className="hover:text-blue-600">
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="text-yellow-600  mb-6">
              .GREAT EXPERIENCE IN BUILDING
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              You Dream, <span className="text-blue-600">We’ll Make It Real</span>
            </h2>
            <p className="text-gray-600 mb-6">
              All types of work – from designing and laying the foundation to
              finishing and commissioning. Tight deadlines, reasonable.
            </p>
            <a
              href="#contact"
              className="bg-gray-900 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://s3-alpha-sig.figma.com/img/43d8/dc63/a3379495628d8928a76b32ae47d02734?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q77wYFLRmUs3ucnsqNmEEO5Eemfo~joqMIygV08NPeVx55n19XOYJUrZzBQEckSdx3YpEopMQ2kDH0OV4~PHjI~i7fZV5Y-gWv2bGFk~9R2x3WS4yPPYcH6DuJgNCiH2icJowRbirKo9nhzDprxfsajim4SsxwphNJfdiMB4XAHmliOzfcUExT1BWegoiJ8dKXcHtLlUGMIgX5mMfze6aHMO6ggAEWHqgGvE5W6~n9gEK9Z~QFksbWDdxx3vvC5LhuU2r54rhE~~k3YWPXs1aXDPYCFvSYvPySclp0lvsQSr6Og0mLAzSFvBTqRkZRvEekwVnGvRbnnkZRcKUuDfmA__"
              alt="Worker"
              className="max-w-full rounded shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 United BuildPro Pvt Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Mainpage;
