import Borabora from "../assets/borabora.jpg";
import  Borabora2 from "../assets/borabora2.jpg";
import  Maldives from "../assets/maldives.jpg";
import  Maldives2 from "../assets/maldives2.jpg";
import  KeyWest from "../assets/keywest.jpg";

const Select = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* ====================== */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={Maldives} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    Maldives
                </p>
            </div>
        </div>
        {/* ======================= */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={Borabora} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    Borabora
                </p>
            </div>
        </div>
        {/* ======================= */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={Borabora2} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    Vanilla
                </p>
            </div>
        </div>
        {/* ======================= */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={Maldives2} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    Cape
                </p>
            </div>
        </div>
        {/* ======================= */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={KeyWest} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    KeyWest
                </p>
            </div>
        </div>
        {/* ======================= */}
        <div className="relative">
            <img className="w-full h-full object-cover" src={Maldives} alt="/" />
            <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
                    Maldives
                </p>
            </div>
        </div>
        {/* ======================= */}
    </div>
  )
}

export default Select
