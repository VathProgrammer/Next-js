import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { FaChessPawn } from "react-icons/fa";
import { LiaGreaterThanSolid } from "react-icons/lia";

const Card = () => {
  return (
    <div className="w-[50vh] h-[52vh] bg-gray-50 px-6 py-3 rounded-md shadow-md">
                <div className="w-full h-10 flex justify-between items-center">
                      <div className="flex items-center">
                            <FaChessPawn className="text-yellow-600"/>
                            <p>Top1</p>
                      </div>
                      <CiBookmark/>
                </div>
                <div className="w-full flex  justify-center">
                          {/* <Image className="w-32 rounded-full border" width={20} height={20} src={"https://media.licdn.com/dms/image/D5603AQHs8MkqgCeZoA/profile-displayphoto-shrink_800_800/0/1698826267451?e=2147483647&v=beta&t=MofeZIMfaMBv_d7tjID7IR9QuLMxSDCnyOs_TtmvpnQ"} alt="profile"></Image> */}
                        {/* <img className="w-32 rounded-full border" src="https://media.licdn.com/dms/image/D5603AQHs8MkqgCeZoA/profile-displayphoto-shrink_800_800/0/1698826267451?e=2147483647&v=beta&t=MofeZIMfaMBv_d7tjID7IR9QuLMxSDCnyOs_TtmvpnQ" alt="img profile" /> */}

                       <Image className="object-cover  w-32 h-32 rounded-full" src={"/Profile.jpg"} alt="Profile" width={90} height={90} objectFit="cover" ></Image>

                </div>
                <div className="w-full flex justify-center">
                        <div className="">
                          <h1 className="text-xl font-serif leading-tight">Ny Sreyneang</h1>
                          <p className="text-sm ml-2">English Teacher</p>
                      </div>
                </div>
                <div className="w-full flex justify-between mt-2">
                      <div className="">
                            <h1 className="text-md">Rating</h1>
                            <div className="flex items-center">
                              <CiStar className="text-yellow-600"/>
                              <p className="text-xs">106</p>
                            </div>
                      </div>
                      <div className="ml-5">
                            <h1 className="text-md">Student</h1>
                            <p className="text-xs ml-5">106</p>
                      </div>
                      <div className="">
                            <h1 className="ml-6">Price</h1>
                            <p className="text-xs">25$/per month</p>
                      </div>
                </div>
               <div className="w-full flex justify-center mt-7">
                   <button className=" flex items-center justify-between px-3 py-1  border border-violet-700 rounded-md">Veiw detail <LiaGreaterThanSolid className=""/></button>
               </div>
          </div>
  )
}

export default Card