import './App.css'

function App() {

  return (
    <>
      <div className='bg-yellow-present w-screen h-screen font-family-base'>

      <div className='w-full h-full flex flex-col justify-center content-center'>

          <div className='bg-white-normal flex flex-col self-center p-[1.4rem] rounded-2xl border-2 border-gray-more gap-[1.4rem] w-[25rem] max-md:w-[20.7rem] dropaShadow'>
            <div>
              <img src="../src/assets/images/ilustracao.svg" alt="" className='rounded-xl w-full'/>
            </div>

            <div className='flex flex-col gap-[1.1rem]'>
              <div className='bg-yellow-present w-fit px-3 py-[3px] rounded-md'>
                <p className='font-font-weight-base-more'> Learning </p>
              </div>

              <p className='font-font-weight-base-less text-size-paragraph max-md:text-[15px]'> Published 21 Dec 2023 </p>
            </div>

            <div className='flex flex-col gap-3'>
              <h1 className='font-font-weight-base-more text-2xl max-md:text-xl hover:text-yellow-present hover:cursor-pointer'>HTML & CSS foundations</h1>

              <p className='text-size-paragraph text-gray-less font-font-weight-base-less max-md:text-[14.4px]'>
                These languages are the backbone of every website, defining structure, content, and presentation.
              </p>
            </div>

            <div className='flex align-middle text-center font-font-weight-base-more gap-2'>
              <img src="../src/assets/images/image-avatar.webp" alt="" className='w-10 h-fit'/>
              <p className='self-center'> Greg Hooper </p>
            </div>

          </div>
      </div>
      </div>
    </>
  )
}

export default App
