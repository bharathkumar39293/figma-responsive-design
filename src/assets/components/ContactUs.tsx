const ContactUs = () => {
    return(
         <div class="py-12">
          <div class="container mx-auto px-4">
            <h2 class="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>
            <div class="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto">
              <form>
                <div class="mb-4">
                  <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Name"/>
                </div>
                <div class="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">Mail Address</label>
                    <input type="email" id="email" class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Email"/>
                  </div>
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input type="tel" id="phone" class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Phone Number"/>
                  </div>
                </div>
                <div class="mb-4">
                  <label for="message" class="block text-sm font-medium text-gray-700">Enter Message</label>
                  <textarea id="message" rows="4" class="w-full mt-2 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600">Submit Request →</button>
              </form>
            </div>
          </div>
        </div>
    )
}

export default ContactUs;