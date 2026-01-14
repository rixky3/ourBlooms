

import c from '../assets/flow/Image.png'
import c1 from '../assets/flow/Image-1.png'
import c2 from '../assets/flow/Image-2.png'
import c3 from '../assets/flow/Image-3.png'
import c4 from '../assets/flow/Image-4.png'
import sec1 from '../assets/section images/Image1.png'
import sec2 from '../assets/section images/Image2.png'
import sec3 from '../assets/section images/Image3.png'
import midSec from '../assets/purple/Image.png'
import midSec1 from '../assets/purple/Image-1.png'
import midSec2 from '../assets/purple/Image-2.png'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import WorkWithUs from '../components/WorkWithUs'

function Home() {


  return (
    <>
    <Hero/>
      <div>

        <div className='content'>
          <p className='caption1'> WHO WE ARE </p>
          <p className='heading2'> We're Our Blooms and we're here to help you</p>
          <button className='button_danger'> About US</button>
        </div>
        <div className='carousel'>
          <img src={c} alt="flow"/>
          <img src={c1} alt="flow" />
          <img src={c2} alt="flow"/>
          <img src={c3} alt="flow"/>
          <img src={c4} alt="flow"/>
        </div>

        <div className='section1'>
            <p className='heading1'>1</p>
            <img src={sec1} alt="sect-img"/>
            <p className='heading1'>FLORAL INSTALLATIONS</p>
            <p className='paragraph1'>Living art for homes, businesses, and events.</p>
            <hr className='divider'/>
          </div>
          <div className='section2'>
            <p className='heading1'>2</p>
            <img src={sec2} alt="sect-img"/>
            <p className='heading1'>NATIVE PLANT ARRANGEMENTS</p>
            <p className='paragraph1'>Whether it's a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
            <hr className='divider'/>
          </div>
          <div className='section3'>
            <p className='heading1'>3</p>
            <img src={sec3} alt="sect-img"/>
            <p className='heading1'>CUSTOM FLORAL CONCEPTS</p>
            <p className='paragraph1'>Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it's a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
            <hr className='divider'/>
          </div>

          <picture>
            <source media="(min-width: 1200px)" srcSet={midSec}/>
            <source media="(min-width: 800px)" srcSet={midSec1}/>
            <img src={midSec2}/>
          </picture>
          <WorkWithUs/>
      </div>
      <Footer/>
      
    </>
  )
}

export default Home;
