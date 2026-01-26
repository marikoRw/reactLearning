import headshot from '../assets/headshot image.jpg';

interface testimonial {
    name: string;
    role: string;
    image: string;
    content: string;
}

const testimonials: testimonial[] = [
  {
    name: "Sarah",
    role: "Senior Developer",
    image: headshot,
    content: "words next to the smaller codes words next to the smaller codes"
  },
  {
    name: "Marcus",
    role: "Intern",
    image: headshot,
    content: "uild and Deploy a Fully Responsive Modern Website using R"
  },
  {
    name: "Emily",
    role: "Student",
    image: headshot,
    content: "words next to the smaller codes words next to the smaller codes"
  },
]

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">

      <div className="max-w-7xl mx-auto">

        <div className='flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16'>

          {/* left side header */}
          <div className="lg:w-1/2 w-full text-center lg:text-left">

            <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">What students say about </span>
              <br />
              <span className="bg-linear-to-b from-blue-400 to-cyan-700 bg-clip-text text-transparent">ParadoxTECH</span>
            </h2>

            <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto">
              Listen to other people's testimonials.
            </p>

          </div>

          {/* right side testimonials */}
          <div className='lg:w-1/2 w-full'>
            <div className='space-y-2 sm:space-y-3'>
              {testimonials.map((testimonial, key) => (
                <div key={key} className='bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-lg'>
                  <div className='flex items-start space-x-3 sm:space-x-4'>

                    {/* right quotation mark */}
                    <div className='shrink-0'>
                      <div className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
                    </div>

                    {/* actual testimonial */}
                    <div className='grow'>
                      <p className='text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4'>{testimonial.content}</p>

                      {/* image and name part */}
                      <div className='flex items-center space-x-2 sm:space-x-3'>

                        <img src={headshot} alt={testimonial.name} className='w-10 h-10 sm:h-12 sm:w-12 rounded-full object-cover'/>
                        
                        {/* person's name & role */}
                        <div>
                          
                          <h4 className='font-semibold text-white text-sm sm:text-base'>{testimonial.name}</h4>
                          <p className='text-xs sm:text-sm text-gray-400'>{testimonial.role}</p>

                        </div>
                        
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Testimonials