import style from "./about.module.css";
import myPhoto from "../../assets/itsme.jpg"

function About() {
    return(
    <div>
    <div className={style.cardContainer}>
    <div className={style.imageContainer}>
       
        <img className={style.characterImage}  src={myPhoto} alt="Milagros Fernández Boto" />
      
       <h2 className={style.name}>¡Hola! Soy Mili. </h2>
    
    </div>
    <div className={style.atributes}>
    <h2>Estoy en camino a ser Full stack developer</h2>
       
        
        <p>Este es mi primer proyecto de página web. Espero que te guste. En él muestro todos mis concimientos en Javascript, HTML, CSS, React y Redux.</p>
    
    </div>
    </div>
 </div>
);

}
export default About;