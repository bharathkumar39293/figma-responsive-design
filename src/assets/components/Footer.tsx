const Footer = () => {
  return (
    <div className="bg-[#14274A] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Logo and Description */}
        <div className="text-center lg:text-left lg:max-w-xs">
          <div className="mx-2">
            <img 
              src="https://s3-alpha-sig.figma.com/img/b86d/1bcc/0f44fadc0e91371a9ead0677d80eb02f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OH~ER05wbvViDIHAFKW25gupyUDQcBoh6TDcExcw7Yiw7RTY9OuKB3-NujBSZnXVHUpseEXVBbjOQG06XQRkcUmghyGiI1GjSQFe63bqpfWDpOalf~EBPv4SDwN8K4aSasWaAuRWfTMaVIISbUr2mUELnEXmUr8qp-Hi-bweQ6dxYOnS-y~FBEnQNF-LjSCbheA1u5LZQJ~hYzRe5BsLsrRfL3rmlkH4Qa1E~FiI3FHjzSyyJa5RGZDQ1V3YEGZefI6YYeU8CSpI4lwGzJWEetWdkhKDPGldAU5qO5BGidW-yMLMdNDkaQJDJmmws-3DChig1iyReHrx8RG6Cma3sQ__" 
              alt="United BuildPro Logo" 
              className="w-32 mx-auto lg:mx-0"
            />
          </div>
          <p className="text-sm leading-relaxed">
            Corporate clients and leisure travelers have been relying on Groundlink for dependable services.
          </p>
          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start mt-4 space-x-4">
            <a
              href="#facebook"
              className="w-8 h-8 bg-white text-[#14274A] rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#twitter"
              className="w-8 h-8 bg-white text-[#14274A] rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#p-interest"
              className="w-8 h-8 bg-white text-[#14274A] rounded-full flex items-center justify-center hover:bg-gray-200"
            >
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Useful Links */}
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-lg mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-lg mb-4">Products</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Listings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Enquiry Form
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <h2 className="font-semibold text-lg mb-4">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a
                href="mailto:unitedbuildpro@gmail.com"
                className="hover:underline"
              >
                unitedbuildpro@gmail.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+919731125090" className="hover:underline">
                +91 9731125090
              </a>
              ,{" "}
              <a href="tel:+919731125090" className="hover:underline">
                9731125090
              </a>
            </li>
            <li>
              Address: #63/A, E Block, 2nd Stage, Dr. Rajkumar Road,
              Subramanya Nagar, Bangalore-560010
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-[#0D1B34] text-center py-4">
        <p className="text-sm">© United BuildPro 2021. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:underline text-sm">
            Terms of Use
          </a>
          <a href="#" className="hover:underline text-sm">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
