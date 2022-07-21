import React, { useState } from 'react';

const FormElement = ({ sendLink}) => {

  const [address, setAddress] = useState("")
  const [cc, setCc] = useState("")
  const [bcc, setBcc] = useState("")
  const [subject, setSubject] = useState("")
  const [body, setBody] = useState("")

  const generateLink = (e) => {
    e.preventDefault();
    sendLink(
      `<a href="mailto:${address}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body.replace(" ", " %20").replace(/[\r\n]/gm, "%0D%0A")}">Send me a mail</a>`
    )
  }
  return (
    <div>
      <form style={{minWidth: "70vw", width: "auto"}}>
        <div class="mb-3 row">
          <label for="to" class="col-sm-2 col-form-label">Email address</label>
          <div class="col-sm-10">
            <input value={address} onChange={(e) => setAddress(e.currentTarget.value)} type="email" class="form-control" id="to" placeholder="name@example.com" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="cc" class="col-sm-2 col-form-label">CC</label>
          <div class="col-sm-10">
            <input value={cc} onChange={(e) => setCc(e.currentTarget.value)} type="text" class="form-control" id="cc" placeholder="name@example.com" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="cc" class="col-sm-2 col-form-label">bcc</label>
          <div class="col-sm-10">
            <input value={bcc} onChange={(e) => setBcc(e.currentTarget.value)} type="text" class="form-control" id="cc" placeholder="name@example.com" />
          </div>
        </div>
        <div class="mb-3 row">
          <label for="subject" class="col-sm-2 col-form-label">Subject</label>
          <div class="col-sm-10">
            <input value={subject} onChange={(e) => setSubject(e.currentTarget.value)} type="text" class="form-control" id="subject" placeholder="name@example.com" />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Body Template</label>
          <textarea value={body} onChange={(e) => setBody(e.currentTarget.value)} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn btn-primary btn-sm' onClick={generateLink}>Generate Link</button>
        </form>
    </div>
  );
};

export default FormElement;