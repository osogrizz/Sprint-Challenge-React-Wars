import React, { useState, useEffect } from 'react';

import axios from 'axios';

const Page = (props) => {
  // console.log('page props', props.data.next);
  const [page, setPage] = useState('');

useEffect(() => {
  axios.get(`${page}`)
    .then( response => {
      // console.log(response.data.results)
    })
    .catch( err => {
      console.log(err);
    })
}, [page])

  return (
    <div>
      <button value="prev" onClick={() => {setPage(props.data.previous)}} page={page}>prev</button>
      <button value="next" onClick={() => {setPage(props.data.next)}}>next</button>
    </div> 
  )
}

export default Page;