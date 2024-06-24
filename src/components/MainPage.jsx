import DoctorImage from '../assets/Doctor_Image.png'
import WelcomeImg from '../assets/Welcome_Img.png'
import HealthCareImg from '../assets/Health_Care_Img.png'
import PlayImg from '../assets/Play_Img.png'
export default function MainPage(){
    return (
        <div className="flex justify-between items-center py-14 px-20 gap-20">
            {/* Left side */}
            <div className='gap-6'>
                <div className='mb-4'>
                    <img src={WelcomeImg} alt="" />
                </div>

                <div className="flex items-center gap-3">
                    <h1 className="text-6xl font-bold mb-4">An A-Z OPD</h1>
                    <img src={HealthCareImg} alt="Healthcare" className='h-12' />
                </div>

                <div className='-mt--5'>
                    <h1 className='text-6xl font-bold mb-4 text-[#1140bf]'>Automation Software</h1>
                    <h1 className='text-6xl font-bold mb-4'> for Your Practice. </h1>
                </div>

                <div>
                    <span className="text-xl text-[#4F4F4F] font-Poppins font-normal">Helping Clinics & Hospitals Staffs to Operate Efficiently.</span>
                </div>


                <div className='flex gap-4 mt-8'>

                    <button className="px-8 py-3.5 text-white bg-gradient-to-r from-[#103ABE] to-[#2ECBF1] rounded-full hover:from-blue-600 hover:to-blue-800 transition duration-300 font-bold">
                    Start your free trial today!
                    </button>

                    <button className="px-8 py-3.5  border border-blue-500 rounded-full bg-clip-text text-transparent bg-gradient-to-r from-[#103ABE] to-[#2ECBF1] font-bold flex items-center justify-center gap-2">
                    <img src={PlayImg} alt="play logo" /> 
                    Watch Video
                    </button>
                   
                </div>

            </div>

            {/* right side */}
            <div>
                <img src={DoctorImage} alt="" />
            </div>
        </div>
    )
}