const ClientsFeedback = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-8">
          Clients Feedback
        </h2>
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button className="absolute left-0 w-10 h-10 bg-transparent border border-yellow-500 shadow-md rounded-full flex items-center justify-center hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>

          </button>

          {/* Feedback Boxes */}
          <div className="mx-auto max-w-5xl w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <p className="text-gray-500 text-sm italic mb-4">
                  Every project we undertake is a harmonious blend of our clients' vision and our design expertise. We focus on creating spaces that not only meet expectations but exceed them, offering a seamless integration of style and functionality.
                </p>
              <div className="flex">  
                <div className="w-10 h-10 border-2 bg-gray-500 rounded-full"></div>
                
                <div>
                <h4 className="font-bold text-gray-800">Lee Barnes</h4>
                <p className="text-sm text-gray-500">SELLING AGENT</p> 
                </div>
                
                </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-orange-500">
                <p className="text-gray-500 text-sm italic mb-4">
                  Every project we undertake is a harmonious blend of our clients' vision and our design expertise. We focus on creating spaces that not only meet expectations but exceed them, offering a seamless integration of style and functionality.
                </p>
                <div>
                
                <div className="flex">
                <div className="w-10 h-10 border-2 bg-gray-500 rounded-full"></div>
                <div>

                
                <h4 className="font-bold text-gray-800">Lee Barnes</h4>
                <p className="text-sm text-gray-500">SELLING AGENT</p>
                </div>
                </div>
              </div>
              </div>

              <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                <p className="text-gray-500 text-sm italic mb-4">
                  Every project we undertake is a harmonious blend of our clients' vision and our design expertise. We focus on creating spaces that not only meet expectations but exceed them, offering a seamless integration of style and functionality.
                </p>

                <div className="flex">
                <div className="w-10 h-10 border-2 bg-gray-500 rounded-full"></div>
                <div>
                <h4 className="font-bold text-gray-800">Lee Barnes</h4>
                <p className="text-sm text-gray-500">SELLING AGENT</p>
               </div>
              </div>
            </div>
          </div>
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-yellow-500 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientsFeedback;
