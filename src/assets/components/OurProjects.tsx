
import React from "react";

const OurProjects = () => {
    return(
        <div class="container mx-auto px-4 py-8 flex flex-col items-center">
        <h1 class="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6">Our Recent Projects</h1>
        
        <div class="flex items-center justify-between">
         
        <button className="absolute left-0 w-10 h-10 bg-transparent border border-yellow-500 shadow-md rounded-full flex items-center justify-center hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06l-2.47 2.47H21a.75.75 0 0 1 0 1.5H4.81l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3.75-3.75a.75.75 0 0 1 0-1.06l3.75-3.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
            </svg>

          </button>
    
         
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://s3-alpha-sig.figma.com/img/8797/b2c4/85d52850bc68d354d1e241ab0bded71b?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hFcE11r2oNKLEkkfMcB-~VCLGcW7MkoGLG9QQlzSnvBj-xP74wUlnTzBDchOemnpqrgLQ3ucmvwVmrXaI4mqIejinHQ6fk-vQciMEs5W3YUVOnWSEHG1clAU3Ifz0qbFLgAdGQnpWVPzx3yDZyBpr6bRrEz~cB0Osi-e6YLluWk~TDZVSd~iR066uRLI~HnbXU1hUHTg1E0~EPCUvApg7pq76n5FzkmF20wEPPnMZzLQeMuE8AWVgbckVDvSuesJ0CyfJUPhB-psgiYc0MAvznfXJwY3dCAlPfZR5TRESd9ZfxlHqpu~6tRW0KPSJLm9XzZkT5tOGxKU7AJTLyyEIQ__" alt="Contemporary Villas" class="w-full h-40 object-cover"/>
              <div class="p-4">
                <p class="text-sm text-gray-400">Construction</p>
                <h2 class="text-xl font-bold text-gray-800 mb-2">Contemporary Villas</h2>
                <a href="#view projects" class="text-orange-500 hover:underline">View Projects →</a>
              </div>
            </div>
        
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://s3-alpha-sig.figma.com/img/e156/0461/87757e6c1801a12c60ebf01c155ac975?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o2io7I3RqNmHUyZDm7dwjwOJ6UpmpOv92wEFRDL0F1yhC~nrrwLuuNfItAI25uNBEgCwPnac6wH2X5qW9~rXErms2vkSl2O7kUFI7fLNGrsPXMA340-8pgV9PxObhGdGtwTN3IUswar-J0mOy2YxOKD20PRWXjBW4jCG7ku7O3Gz1CJDVum0O6qz8DMODXTp5jxhrZXkLu-I9nfFJshRxxoAszThPrWuoG9C8yRvZ8ZrOKcwaVVKM~2aHbNambptvJ9xKrPFIoeeJoEvMwTab5Beo~rAj8kUzK1pS3JOPqpBRhGZYoKYaS0Byp4KemPZGf-AB36~N4kXcesRIe1J5A__" alt="Empire State Building" class="w-full h-40 object-cover"/>
              <div class="p-4">
                <p class="text-sm text-gray-400">Construction</p>
                <h2 class="text-xl font-bold text-gray-800 mb-2">Empire State Building</h2>
                <a href="#view-projects" class="text-orange-500 hover:underline">View Projects →</a>
              </div>
            </div>
      
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
              <img src="https://s3-alpha-sig.figma.com/img/958f/a0e8/cec1e3289d4302b9b147cf687b574b6d?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tykh4e2fyLyaNaJnONZWfaJUAUWH97bn2ni4JAI0uRVmjPrtnLG7vuVy2vIKXd3NahX9LeW-P9TbSNmKKkZ9~MM69ljwyRRMKDwvfjdbps7zwYIKiODHKAxoOYChQz38b6GARiT~QXlL3~DA492oRCTIBKNCpHGC9nRxGsRlEWXidB9qXBN4E3BjySRgTlEJid-OBBIm6uG5kbJYvu4WgKgCyH8KIZnLhRk7DksXxyM1rlYRInSC4syawmsKibV8rlVI6Z41mxyC9bebcauTSIX8JLCGfZvWng6SxiEMcsGYIKLwkdFAfBfhAKHIybOgl2H63KAlXN4y1-P8GjOA~A__" alt="Central Park Tower" class="w-full h-40 object-cover"/>
              <div class="p-4">
                <p class="text-sm text-gray-400">Construction</p>
                <h2 class="text-xl font-bold text-gray-800 mb-2">Central Park Tower</h2>
                <a href="#view-projects" class="text-orange-500 hover:underline">View Projects →</a>
              </div>
            </div>
          </div>
    
          <button className="absolute right-0 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center border border-yellow-500 hover:bg-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
              <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>

          </button>
        </div>
      </div>
    )
};

export default OurProjects;