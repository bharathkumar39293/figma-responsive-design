const HowWeWork = () => {
  return (
    <div
      className="bg-[url('https://s3-alpha-sig.figma.com/img/99e3/6b70/586748395088573c16df4f51d9709913?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nhhN7Rd1zouly6Lcpjpb6xDifmgz700eU4rGwcGO74BrdibNOzhzveyZsvpqAVOwAEKTmBSgmQWNTCxIiA~mDO93ZuSmFVP7c1ooPu9NGBODurXSduwROo0gKd0GYlXrSHLznjm9j~ycU-i1RG4fVIRDtbhYWyG4VtRXjOm83gnY7NupCPp02iM7NOANhkwABdacr8e4HNtuH4FyYe3G8lq4xA-fH5C2pwJIgSJDG6dnyN0PAUP9M1jkUJliKFcWFb0XT43cizPft-dWtnPn793dSnstYUdBa2oM1p0Io6wiLyY~rHeldciWkX0hHeiqZXG1-ooW-g7y7oceGtGz5A__')] bg-cover bg-center h-full w-full font-sans"
      role="region"
      aria-labelledby="client-feedback-heading"
    >
      <div className="container mx-auto px-4 h-[50%] bg-white w-[70%] mt-10">
        <h2
          id="client-feedback-heading"
          className="text-center text-2xl md:text-4xl font-bold text-gray-800 mb-8"
        >
          How We Work
        </h2>
        <div className="relative flex items-center">
      
          <div className="flex grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div class="text-orange-500 mb-4">
                <i class="fas fa-drafting-compass text-3xl"></i>
              </div>
              <h3 class="text-9xl font-bold text-gray-300 mb-2">01</h3>
              <h3 class="text-xxl font-bold text-gray-800 mb-2">Collaborative Design project</h3>
              <p class="text-gray-600 text-sm mb-4">
                Designing a building starts with a vision, and at United Buildpro, we help you visualize that vision with precision.
              </p>
              <a href="#ReadMore" class="text-orange-500 font-semibold hover:underline">Read More →</a>
            </div>


            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div class="text-orange-500 mb-4">
                <i class="fas fa-paint-roller text-3xl"></i>
              </div>
              <h3 class="text-9xl font-bold text-gray-300 mb-2">02</h3>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">seamless execution</h3>
              <p class="text-gray-600 text-sm mb-4">
                Your dream space deserves the best execution, and that's where United Buildpro Pvt Ltd excels.
              </p>
              <a href="#ReadMore" class="text-orange-500 font-semibold hover:underline">Read More →</a>
            </div>

            <div class="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
              <div class="text-orange-500 mb-4">
                <i class="fas fa-tractor text-3xl"></i>
              </div>
              <h3 class="text-9xl font-bold text-gray-300 mb-2">03</h3>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Comprehensive design</h3>
              <p class="text-gray-600 text-sm mb-4">
                At United Buildpro Pvt Ltd, we transform undeveloped land into thriving spaces through our comprehensive land development services.
              </p>
              <a href="#ReadMore" class="text-orange-500 font-semibold hover:underline">Read More →</a>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default HowWeWork;