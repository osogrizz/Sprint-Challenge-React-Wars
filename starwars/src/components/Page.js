import React from 'react';

const Page = (props) => {
  console.log('page props', props);
  return (
    <div>
      <button value="prev" >prev</button>
      <button value="next" >next</button>
    </div> 
  )
}

export default Page;