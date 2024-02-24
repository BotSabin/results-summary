import data from './data/data.json'

function App() {

  const backgroundClasses = ["bg-red/10", "bg-yellow/10", "bg-teal/10", "bg-cobalt/10"];
const textClasses = ["text-red", "text-yellow", "text-teal", "text-cobalt"];

  return (
    <main className="flex flex-col md:flex-row md:justify-center pb-8 md:pb-0 gap-y-6 font-hanken bg-white md:rounded-[35px] ">
      <section className="w-full md:max-w-[450px] bg-gradient-light-slate-blue-to-light-royal-blue
      rounded-b-[2rem] md:rounded-[35px] flex flex-col items-center justify-center py-8 px-10 gap-y-5">
        <h1 className="text-lavender font-medium text-lg">Your Result</h1>
        <p className="flex flex-col items-center gap-y-2
  bg-gradient-to-b from-hsla-violet-blue to-hsla-persian-blue
  px-8 py-5 md:px-12 md:py-10 rounded-full text-lavender text-sm font-medium">
  <b className="text-white text-5xl md:text-7xl">76 </b>
  of 100
</p>

        <div className="flex flex-col items-center gap-y-3 text-center">
          <h2 className="text-white text-2xl font-bold">Great</h2>
          <p className="text-[18px] font-medium text-lavender">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
      </section>

      <section className="flex flex-col px-8 md:py-8 gap-y-4 w-full">
        <h3 className="text-gray text-lg font-medium">Summary</h3>
        
        {data.map((item, index) => (
          <div key={index} className={`flex justify-between px-2 py-4 rounded-xl ${backgroundClasses[index % backgroundClasses.length]}`}>
            <p className={`flex font-medium gap-x-2 ${textClasses[index % textClasses.length]}`}>
          
            <img src={item.icon} alt="" />
            <span>{item.category}</span>
            </p>
            <span className='font-medium text-gray/50'>
        <b className="text-gray">{item.score}</b> / 100
      </span>
          </div>
        ))}
      
        <button className="w-full max-w-[280px] mx-auto bg-gray
       rounded-full py-4 text-white font-medium text-lg mt-5
       hover:bg-gradient-light-slate-blue-to-light-royal-blue">Continue</button>
      </section>
    </main>
  )
}

export default App
