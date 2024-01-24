import Card from "./components/Card"
const Home = () =>{
   return(
    <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[90%] h-full flex justify-between items-center">
                <div className="flex justify-between items-center w-full h-full ">
                    <Card/>
                    <Card/>
                    <Card/>
                 </div>
            </div>
    </div>
   )
}

export default Home