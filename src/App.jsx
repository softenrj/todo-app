import React from 'react';
import Main from '../component/main';

const App = () => {
  return (
    <div className='bg-[#E3E9FF] h-screen w-full md:flex justify-center items-center'> 
      <Main />
      <p className='text-[#AF7EEB] absolute bottom-1 left-1/2 -translate-x-1/2'>@SoftenRj {new Date().getFullYear()}</p>
    </div>
  );
}

export default App;
