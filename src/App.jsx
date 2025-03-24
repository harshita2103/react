import React from 'react'
import Header from './components/Header'
import Card from './components/Card'
import Video from './components/Video'

function App() {
  return (
    <>
      <Header name="Harshita" age="20" />
      <Header name="Aru" age="19" />
      <h1>Hello App</h1>

      <div className="row">
        <div className="col">
          <Card title="Harshita" img="images/profile.jpg" desc="iandae dolore accusantium explicabo? In, eum." />
        </div>
        <div className="col">
          <Card title="Deepak" img="images/profile2.jpg" desc=" Lorem ipsum dolor sit amet consectetur abis quis. Repudiandae dolore accusantium explicabo? In, eum." />
        </div>
        <div className="col">
          <Card title="Aru" img="images/profile1.jpg" desc=" Lorem ipsum doRepudiandae dolore accusantium explicabo? In, eum." />
        </div>
      </div>

      <div className="container-fluid">
        <Video src='videos/v1.mp4' />
        <Video src='videos/v2.mp4' />
        <Video src='videos/v3.mp4' />
        <Video src='videos/v4.mp4' />
      </div>

      <form action="" className='container'>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
      </form>
    </>
  )
}


export default App