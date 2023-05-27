import React from 'react'
import styled from '../About/About.module.css';
import miImage from '../../Assets/Images/About.jpg';

export const About = () => {
    return (
        <div className={styled.container}>
            <div >
                <h2 className=''>Nombre : <span className=''> Marcos Gallardi</span></h2>
                <h3 className=''>Empleo: <span className=''>TI Support</span> en SanMartin</h3>
                <p className=''>Soy de una ciudad a 100km de Buenos Aires (Mercedes Bs As). <br /> Tengo 25años. Comence a estudiar desarrollo de software hace<br /> 2 años aproximadamente, y fue donde pude encontrar mi<br /> verdadera vocacion.</p>
                <p className=''>Hablando especificamente de esta app que esta desarrollando para <br /> el M2 me gusta mucho la menera en que se enfoco. Aunque no tengo<br /> idea de rick and morty, eso se puede ver reflejado en mis estilos tal vez.</p>
            </div>

            <div>
                <img src={miImage} alt="foto" className={styled.imagen} />
            </div>
        </div>
    );
};
