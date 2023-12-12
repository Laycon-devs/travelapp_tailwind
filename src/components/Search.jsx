import {RiCustomerService2Fill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'



const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div className="">
            <h2>LUXURY INCLUDED VACATIONS FOR PEOPLE</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem tempore ab ad blanditiis quod vero quasi sed, veritatis, eveniet repellat libero asperiores fugiat architecto vel beatae? Dicta provident ipsum, cum, illo quibusdam voluptatibus ab sunt mollitia animi, eligendi eius id velit! Quae eveniet iusto, consequuntur voluptatibus non esse adipisci autem fugiat nisi et dolor corporis libero aliquam ipsam consequatur necessitatibus hic eaque, ab cum exercitationem quas ipsum. Sunt nostrum nobis ea veritatis asperiores, maxime amet deserunt nulla at, aliquam consequuntur.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
            <div className="flex flex-col lg:flex-row items-center text-center">
                <button>
                    <RiCustomerService2Fill size={50} />
                </button>
                <div className="">
                    <h3>LEADING SERVICE</h3>
                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center text-center">
                <button>
                    <MdOutlineTravelExplore  size={50}/>
                </button>
                <div className="">
                    <h3>LEADING SERVICE</h3>
                    <p>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                </div>
            </div>
        </div>
      </div>
      
      <div className="">
        <div className="border text-center">
            <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
            <p className="py-4">12 HOURS LEFT</p>
            <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className='w-full'>
            <div className="flex flex-col my-2">
                <label>Destination</label>
                <select className="border rounded-md p-2">
                    <option>Grande Antigua</option>
                    <option>Key West</option>
                    <option>Maldives</option>
                    <option>Cozumel</option>
                </select>
            </div>
            <div className="flex flex-col my-4">
                <label>Check-In</label>
                <input type="date" className='border rounded-md p-2' />
            </div>
            <div className="flex flex-col my-4">
                <label>Check-Out</label>
                <input type="date" className='border rounded-md p-2' />
            </div>
            <button className="w-full my-4">Rates & Availabilities</button>
        </form>
      </div>
    </div>
  )
}

export default Search
