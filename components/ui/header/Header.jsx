import HerouiSwiper from "./HerouiSwiper";


const Header = ({data}) => {
  return (
    <header className=" h-[746px]">
        <HerouiSwiper data={data}/>
{/*         <div className="container mx-auto">
        <h1>this is header</h1>
        </div> */}
    </header>
  )
}

export default Header
