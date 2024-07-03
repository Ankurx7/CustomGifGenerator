import Random from './components/Random'
import Tag from './components/Tag'
export default function App() {
     return(
         
      <div className = "w-full h-screen flex flex-col background  items-center">
          <h1 className="  bg-white rounded-sm w-11/12 text-center mt-[40px]
                          ml-[15px] px-10 py-2 text-3xl font-bold">RANDOM GIFS</h1>
          <div className = " flex flex-col w-full items-center">
              <Random className=''/>
              <Tag/>
          </div>
      </div>
     );
}
