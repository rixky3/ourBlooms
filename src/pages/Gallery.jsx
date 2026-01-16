
import styles from "../styles/Gallery.module.css"
import g from '../assets/Gallery/Image.png'
import g1 from '../assets/Gallery/Image-1.png'
import g2 from '../assets/Gallery/Image-2.png'
import g3 from '../assets/Gallery/Image-3.png'
import g4 from '../assets/Gallery/Image-4.png'
import g5 from '../assets/Gallery/Image-5.png'
import g6 from '../assets/Gallery/Image-6.png'
import g7 from '../assets/Gallery/Image-7.png'
import g8 from '../assets/Gallery/Image3.png'
import Footer from "../components/Footer"
import WorkWithUs from "../components/WorkWithUs"
import Services from "../components/Services"

function Gallery(){
    return(
        <>
        <div className={styles.header}> 
        <h1 className="heading1"> GALLERY </h1>
        </div>

        <div className={styles.main}>
            <div className={styles.container}>
                <p className="caption1"> SEASONAL ARRANGEMENTS</p>
                <div className={styles.galleryContainer}>  

                    <div> 
                    <div className={styles.image}>
                        <p> Dawn Bloom <span className="heading4"> $55/Bunch</span>
                        </p>
                        <img src={g} alt="gallery image" className={styles.imag01}/>
                    </div>
                    </div>

                    
                    <div> 
                    <div className={styles.image}>
                        <p> SOLSTICE STEMS <span className="heading4"> $30/Bunch</span>
                        </p>
                        <img src={g1} alt="gallery image" className={styles.imag012}/>
                    </div>
                    </div>
                    
                    <div> 
                    <div className={styles.image}>
                        <p> WHISPER GREENS <span className="heading4"> $120/Bunch</span>
                        </p>
                        <img src={g2} alt="gallery image" className={styles.imag013}/>
                    </div>
                    </div>

                    

                    <div> 
                    <div className={styles.image}>
                        <p> CLARITY PETALS <span className="heading4"> $55/Bunch</span>
                        </p>
                        <img src={g3} alt="gallery image" className={styles.imag11}/>
                    </div>
                    </div>


                    <div> 
                    <div className={styles.image}>
                        <p> RIVER STONE <span className="heading4"> $30/Bunch</span>
                        </p>
                        <img src={g4} alt="gallery image" className={styles.imag12}/>
                    </div>
                    </div>


                    
                    <div> 
                    <div className={styles.image}>
                        <p> MOONLIT MEADOW <span className="heading4"> $120/Bunch</span>
                        </p>
                        <img src={g5} alt="gallery image" className={styles.imag13}/>
                    </div>
                    </div>



                    <div> 
                    <div className={styles.image}>
                        <p> EMBER LEAF <span className="heading4"> $55/Bunch</span>
                        </p>
                        <img src={g6} alt="gallery image" className={styles.imag21}/>
                    </div>
                    </div>


                    
                    <div> 
                    <div className={styles.image}>
                        <p> SKYLINE BLOOM <span className="heading4"> $75/Bunch</span>
                        </p>
                        <img src={g7} alt="gallery image" className={styles.imag22}/>
                    </div>
                    </div>


                    
                    <div> 
                    <div className={styles.image}>
                        <p> STILL WATERS <span className="heading4"> $250/Bunch</span>
                        </p>
                        <img src={g8} alt="gallery image" className={styles.imag23}/>
                    </div>
                    </div>

                    
                </div>
            </div>
            <Services/>
            <WorkWithUs/>
        </div>
        <Footer/>
        </>
        
    )
}
export default Gallery;