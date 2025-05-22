import { useState } from 'react';

const Footer = () => {
  
  const [showBrands, setShowBrands] = useState(false);

  return (
    <footer className="w-full bg-gray-900 text-white">
    
      <div className="bg-gray-300 py-3 px-8">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between gap-4 px-4">
          <div className="flex items-center gap-2 text-gray-800">
            <a href="tel:+917256095121" className="hover:text-green-700 flex items-center gap-1" aria-label="Call us">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className='text-lg font-semibold font-mono'>Call Now</span>
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-800">
            <a href="https://wa.me/7256095121" className="hover:text-green-700 flex items-center gap-1" aria-label="WhatsApp">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.087-.744.084-.729.084-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className='text-lg font-semibold font-mono'>WhatsApp</span>
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-gray-800">
            <a href="mailto:hrithik3317@gmail.com" className="hover:text-green-700 flex items-center gap-1" aria-label="Email us">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className='text-lg font-semibold font-mono'>Email</span>
            </a>
          </div>
        </div>
      </div>

     
      <div className="bg-black py-6 text-center relative">
        <div className="container mx-auto px-4">
          <div className="text-xl md:text-2xl font-semibold">
            UNBEATABLE CAR SERVICING PRICES.
            <a href="/get-quote" className="text-white ml-2 underline underline-offset-4 hover:text-green-400">
              Get a free quote
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 px-6">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Brands We Serve</h3>
              <button 
                className="md:hidden bg-gray-700 px-3 py-1 rounded"
                onClick={() => setShowBrands(!showBrands)}
              >
                {showBrands ? 'Hide Brands' : 'Show Brands'}
              </button>
            </div>
            <hr className="border-gray-600 mb-4" />
            
            <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-1 ${showBrands ? 'block' : 'hidden md:grid'}`}>
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Acura</a></li>
                  <li><a href="#" className="hover:text-green-400">Alfa Romeo</a></li>
                  <li><a href="#" className="hover:text-green-400">Audi</a></li>
                  <li><a href="#" className="hover:text-green-400">BMW</a></li>
                  <li><a href="#" className="hover:text-green-400">Buick</a></li>
                  <li><a href="#" className="hover:text-green-400">Cadillac</a></li>
                  <li><a href="#" className="hover:text-green-400">Chevrolet</a></li>
                  <li><a href="#" className="hover:text-green-400">Chrysler</a></li>
                  <li><a href="#" className="hover:text-green-400">Dodge</a></li>
                  <li><a href="#" className="hover:text-green-400">Ford</a></li>
                </ul>
              </div>
              
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Genesis</a></li>
                  <li><a href="#" className="hover:text-green-400">GMC</a></li>
                  <li><a href="#" className="hover:text-green-400">Honda</a></li>
                  <li><a href="#" className="hover:text-green-400">Hyundai</a></li>
                  <li><a href="#" className="hover:text-green-400">Infiniti</a></li>
                  <li><a href="#" className="hover:text-green-400">Jaguar</a></li>
                  <li><a href="#" className="hover:text-green-400">Jeep</a></li>
                  <li><a href="#" className="hover:text-green-400">Kia</a></li>
                  <li><a href="#" className="hover:text-green-400">Land Rover</a></li>
                  <li><a href="#" className="hover:text-green-400">Lexus</a></li>
                </ul>
              </div>
 
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Lincoln</a></li>
                  <li><a href="#" className="hover:text-green-400">Mazda</a></li>
                  <li><a href="#" className="hover:text-green-400">McLaren</a></li>
                  <li><a href="#" className="hover:text-green-400">Mercedes-Benz</a></li>
                  <li><a href="#" className="hover:text-green-400">Mini</a></li>
                  <li><a href="#" className="hover:text-green-400">Mitsubishi</a></li>
                  <li><a href="#" className="hover:text-green-400">Nissan</a></li>
                  <li><a href="#" className="hover:text-green-400">Porsche</a></li>
                  <li><a href="#" className="hover:text-green-400">Ram</a></li>
                  <li><a href="#" className="hover:text-green-400">Range Rover</a></li>
                </ul>
              </div>
        
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Rolls-Royce</a></li>
                  <li><a href="#" className="hover:text-green-400">Subaru</a></li>
                  <li><a href="#" className="hover:text-green-400">Tesla</a></li>
                  <li><a href="#" className="hover:text-green-400">Toyota</a></li>
                  <li><a href="#" className="hover:text-green-400">Volkswagen</a></li>
                  <li><a href="#" className="hover:text-green-400">Volvo</a></li>
                  <li><a href="#" className="hover:text-green-400">Aston Martin</a></li>
                  <li><a href="#" className="hover:text-green-400">Bentley</a></li>
                  <li><a href="#" className="hover:text-green-400">Bugatti</a></li>
                  <li><a href="#" className="hover:text-green-400">Ferrari</a></li>
                </ul>
              </div>
      
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Fiat</a></li>
                  <li><a href="#" className="hover:text-green-400">Lamborghini</a></li>
                  <li><a href="#" className="hover:text-green-400">Lotus</a></li>
                  <li><a href="#" className="hover:text-green-400">Maserati</a></li>
                  <li><a href="#" className="hover:text-green-400">Maybach</a></li>
                  <li><a href="#" className="hover:text-green-400">MG</a></li>
                  <li><a href="#" className="hover:text-green-400">Pagani</a></li>
                  <li><a href="#" className="hover:text-green-400">Peugeot</a></li>
                  <li><a href="#" className="hover:text-green-400">Renault</a></li>
                  <li><a href="#" className="hover:text-green-400">Suzuki</a></li>
                </ul>
              </div>
         
              <div>
                <ul className="space-y-1">
                  <li><a href="#" className="hover:text-green-400">Tata</a></li>
                  <li><a href="#" className="hover:text-green-400">Seat</a></li>
                  <li><a href="#" className="hover:text-green-400">Škoda</a></li>
                  <li><a href="#" className="hover:text-green-400">Smart</a></li>
                  <li><a href="#" className="hover:text-green-400">SsangYong</a></li>
                  <li><a href="#" className="hover:text-green-400">Triumph</a></li>
                  <li><a href="#" className="hover:text-green-400">Vauxhall</a></li>
                  <li><a href="#" className="hover:text-green-400">Citroën</a></li>
                  <li><a href="#" className="hover:text-green-400">Opel</a></li>
                  <li><a href="#" className="hover:text-green-400">Daihatsu</a></li>
                </ul>
              </div>
            </div>
          </div>
  
          <div className="grid md:grid-cols-2 gap-8 pb-8">

            <div>
              <h3 className="text-xl font-semibold mb-2">Business Details</h3>
              <hr className="border-red-500 w-3/4 mb-4" />
              
              <div className="space-y-4">
                <a
                  href="https://www.google.com/maps/dir//CAR+HUB+:+Multi+brand+Car+Service+Center+in+Patna,+Kanti+Factory+Rd,+near+PNB,+New+Colony,+Kankarbagh,+Kumhrar,+Patna,+Bihar+800020"
                  className="flex items-start hover:text-green-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>PLOT-1# Kanti Factory Road Near PNB<br />Kankarbagh Patna Bihar-20</span>
                </a>
                
                <a
                  href="https://www.google.com/maps/dir//BOSCH+Authorized+Car+Service+Center-+Carhub,+Naya+Tola,+near+Patna,+Daud+Bigha,+Sadar+BLOCK,+Kumhrar,+Patna,+Bihar+800026"
                  className="flex items-start hover:text-green-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>PLOT-2# Naya Tola, Sadar BLOCK, Kumhrar,<br />Patna, Bihar 800026</span>
                </a>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="tel:+917256095121" className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md">
                    Call
                  </a>
                  <a href="tel:+917256095121" className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md">
                    Dial-Booking
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <hr className="border-red-500 w-3/4 mb-4" />
              
              <ul className="grid grid-cols-2 gap-y-2">
                <li><a href="/" className="hover:text-green-400">Home</a></li>
                <li><a href="/working" className="hover:text-green-400">Working</a></li>
                <li><a href="/service" className="hover:text-green-400">Service</a></li>
                <li><a href="/brands" className="hover:text-green-400">Brands</a></li>
                <li><a href="/contact" className="hover:text-green-400">Contact</a></li>
                <li><a href="https://ap.boschcarservice.com/in/en/" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">Bosch Service</a></li>
                <li><a href="https://g.co/kgs/kWxxbmA" className="hover:text-green-400" target="_blank" rel="noopener noreferrer">Car Hub Service</a></li>
                <li><a href="/terms" className="hover:text-green-400">Terms & Condition</a></li>
              </ul>
            </div>
          </div>
   
          <hr className="border-red-500" />
          
          <div className="pt-4 flex flex-col md:flex-row justify-between items-center">
            <p>© 2019-2025 Car Hub Patna. All Rights Reserved.</p>
            
            <div className="flex gap-4 mt-3 md:mt-0">
              <a href="https://www.instagram.com" className="text-white hover:text-pink-500" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              <a href="https://www.facebook.com" className="text-white hover:text-blue-500" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;