import Borabora from "../assets/borabora.jpg";
import  Borabora2 from "../assets/borabora2.jpg";
import  Maldives from "../assets/maldives.jpg";
import  Maldives2 from "../assets/maldives2.jpg";
import  KeyWest from "../assets/keywest.jpg";
const Destination = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
      <h1>All-Inclusive Resorts</h1>
      <p className="py-4">On the Caribbean's Best Coasts</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img src={Borabora} className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" alt="" />
        <img src={Borabora2} className="w-full h-full object-cover" alt="" />
        <img src={Maldives} className="w-full h-full object-cover" alt="" />
        <img src={Maldives2} className="w-full h-full object-cover" alt="" />
        <img src={KeyWest} className="w-full h-full object-cover" alt="" />
      </div>
    </div>
  );
};

export default Destination;
