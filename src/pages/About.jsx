import Footer from '../components/Footer';
import styles from '../styles/About.module.css'
import lady from '../assets/Lady/image.png'
import lady1 from '../assets/Lady/image-1.png'
import lady2 from '../assets/Lady/image-2.png'
import a from '../assets/AboutPage/image 01.png'
import a1 from '../assets/AboutPage/image01-1.png'
import a2 from '../assets/AboutPage/image 01-2.png'
import b from '../assets/AboutPage/image 02.png'
import b1 from '../assets/AboutPage/image 02-1.png'
import b2 from '../assets/AboutPage/image 02-2.png'
import c from '../assets/AboutPage/image 03.png'
import c1 from '../assets/AboutPage/image 03-1.png'
import c2 from '../assets/AboutPage/image 03-2.png'
import ib1 from '../assets/AboutPage/image breaker.png'
import ib2 from '../assets/AboutPage/image breaker-1.png'
import ib3 from '../assets/AboutPage/image breaker-2.png'

function About(){
    return(
        <>
        <div className={styles.head}>
        <p className="heading1"> ABOUT </p>
        </div>
        
        <div className={styles.container}>
            <div>
                <p className={styles.cap}> Our story</p>
            </div>
        

        <div className={styles.rightColumnContainer}>
            <div className={styles.AuthorInformation}>
                <picture>
                <source media="(min-width: 1200px)" srcSet={lady}/>
                    <source media="(min-width: 800px)" srcSet={lady1}/>
                    <img src={lady2} alt="author" className={styles.authorImg}/>
                </picture>
                <div className={styles.authorDetails}>
                    <p className='caption2'> Lily Smith </p>
                    <p className='paragraph1'> Owner</p>
                </div>
            </div>
        

        <div className={styles.more}>
        <p className='paragraph2' > Our Blooms was founded in honor of Lily Smith's loving aunts, Teresa and Beth</p>
        </div>

        <div className={styles.upImage}>
            <picture>
                <source media="(min-width: 1200px)" srcSet={a}/>
                <source media="(min-width: 800px)" srcSet={a1}/>
                <img src={a2} alt="penoines" className={styles.authorImage}/>
            </picture>

            <picture>
                <source media="(min-width: 1200px)" srcSet={b}/>
                <source media="(min-width: 800px)" srcSet={b1}/>
                <img src={b2} alt="pink flower" className={styles.authorImage}/>
            </picture>

            <picture>
                <source media="(min-width: 1200px)" srcSet={c}/>
                <source media="(min-width: 800px)" srcSet={c1}/>
                <img src={c2} alt="white flower" className={styles.authorImage}/>
            </picture>
        </div>

        <div className={styles.bottomTxt}>
            <p className='heading2'> Lilys journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil.

            Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.
            </p>

            <picture>
                <source media="(min-width: 1200px)" srcSet={ib1}/>
                <source media="(min-width: 800px)" srcSet={ib2}/>
                <img src={ib3} alt="white flower" className={styles.imageBreaker}/>
            </picture>

            <p className='paragraph2'> From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.


            Discover how we can add a touch of natural beauty to your next event.
            </p>

            <div className={styles.container}>
                <button className='button_danger'> BOOK A CONSULTATION</button>
            </div>

        </div>
        </div>
        </div>

        <Footer/>
        </>
    )
}
export default About;