import Logo from '../assets/Logo.png'
export default function NavBar(){
    return (
        <div className="flex justify-between items-center p-5 bg-white shadow py-6 px-20">
            <div className='w-40 h-9'>
                <img src={Logo} alt="doctrue logo" />
            </div>
            <div className='flex justify-between items-center gap-11'>
                <div className='flex justify-between items-center'>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">About Us</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">How It Works</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">Features</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">Clinics</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">Product</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">Testimonial</a>
                    <a href="#" className="mr-5 hover:text-blue-500 transition duration-300">Pricing</a>
                </div>
                <div className="flex space-x-4 h-10">
                    <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 font-bold">
                        Contact Us
                    </button>
                    <button className="px-4 py-2 text-white bg-gradient-to-r from-[#103ABE] to-[#2ECBF1] rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 font-bold">
                        Book A Demo
                    </button>
                </div>
            </div>
        </div>
    )
}