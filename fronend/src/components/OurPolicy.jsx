import {assets} from '../assets/assets.js'
const OurPolicy = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
      <div className="text-center">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-5" alt="Exchange Icon" />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We offer hassle-free exchange policy</p>
      </div>
      <div className="text-center">
        <img src={assets.quality_icon} className="w-12 m-auto mb-5" alt="Quality Icon" />
        <p className="font-semibold">7 Days Return Policy</p>
        <p className="text-gray-400">We provide 7 days free return policy</p>
      </div>
      <div className="text-center">
        <img src={assets.support_img} className="w-12 m-auto mb-5" alt="Support Icon" />
        <p className="font-semibold">Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default OurPolicy