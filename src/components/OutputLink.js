import React, { useEffect, useState } from 'react';

const OutputLink = ({data}) => {

  const [link, setLink] = useState(data);
  useEffect(() => {
    setLink(data);
  },[data])

  const copyLink = () => {
    navigator.clipboard.writeText(link);
  }

  return (
    <div className='mb-3 mt-5 w-75'>
      <textarea onChange={(e) => setLink(e.currentTarget.value)} class="form-control"  row="3" name="link" id="link" value={link}/>
      <button onClick={copyLink} className='btn btn-primary btn-sm'>Copy</button>
    </div>
  )
};

export default OutputLink;