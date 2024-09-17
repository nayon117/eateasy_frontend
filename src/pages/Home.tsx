import landingimage from '../assets/landing.png'
import appDownloadImg from '../assets/appDownload.png'
import Testimonial from '@/components/Testimonial';

const Home = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className="flex flex-col bg-white py-8 shadow-md gap-5 text-center rounded-lg -mt-16">
                <h1 className="text-4xl font-bold tracking-tight text-teal-600">
                Treat yourself to a flavorful takeaway
                </h1>
                <span className="text-xl">Food is just a click away</span>
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
                <img src={landingimage} alt="restaurant image" />
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <span className='font-bold tracking-tighter text-3xl'>Order takeaway in a flash</span>
                    <span>
                        Download the EatEasy app to faster order food and get it delivered to your door.
                    </span>
                    <img src={appDownloadImg} alt="app download image" />
                </div>  
            </div>
            <Testimonial />
        </div>
    )
}
export default Home;