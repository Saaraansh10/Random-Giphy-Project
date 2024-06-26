import Random from "./components/Random"
import Tag from "./components/Tag";
//heading hai random gif
//random gif ka div
//tag wale random gif ka div
export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className=" bg-white rounded-lg w-11/12 text-center mt-[40px]
       px-10 py-2 text-4xl font-bold ">
      RANDOM GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
