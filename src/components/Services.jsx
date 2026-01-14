import smla from '../assets/servicesModule1/Image.png'
import smlb from '../assets/servicesModule1/Image-1.png'
import smlc from '../assets/servicesModule1/Image-2.png'
import sm2a from '../assets/servicesModule2/Image.png'
import sm2b from '../assets/servicesModule2/Image-1.png'
import sm2c from '../assets/servicesModule2/Image-2.png'
import sm3a from '../assets/servicesModule3/Image.png'
import sm3b from '../assets/servicesModule3/Image-1.png'
import sm3c from '../assets/servicesModule3/Image-2.png'
import styles from '../styles/Services.module.css'

function Services(){
    return(
        <>
        <section>
            <div className="services_content">
                <div className={styles.serviceModule}>
                    <div>
                        <p className="heading1">FLORAL INSTALLATIONS</p>
                        <p className="paragraph1"> We create clean, contemporary decore</p>
                    </div>

                    <picture>
                    <source media="(min-width: 1200px)" srcSet={smla}/>
                    <source media="(min-width: 800px)" srcSet={smlb}/>
                    <img src={smlc} alt="Person making Bouquette"/>
                    </picture>
                </div>
                <hr/>
                <div className={styles.serviceModule2}>
                    <div>
                        <p className='heading1'>NATIVE PLANT ARRANGEMENTS</p>
                        <p className='paragraph1'> Our selection of locally sourced flora bring</p>
                    </div>
                    <picture>
                    <source media="(min-width: 1200px)" srcSet={sm2a}/>
                    <source media="(min-width: 800px)" srcSet={sm2b}/>
                    <img src={sm2c} alt="Picking flowers"/>
                    </picture>
                </div>
                <hr/>
                <div className={styles.serviceModule3}>
                <div>
                        <p className='heading1'>CUSTOM FLORAL CONCEPTS</p>
                        <p className='paragraph1'> Your vision, our blooms. we build arrangements of flowers</p>
                    </div>
                    <picture>
                    <source media="(min-width: 1200px)" srcSet={sm3a}/>
                    <source media="(min-width: 800px)" srcSet={sm3b}/>
                    <img src={sm3c} alt="Pink tulips"/>
                    </picture>
                </div>
                </div>
        </section>
        </>
    )
}
export default Services;