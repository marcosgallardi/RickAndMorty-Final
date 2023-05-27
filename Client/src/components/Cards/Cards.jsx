import  Card  from '../Card/Card';
import styled from '../Cards/Cards.module.css'


export function Cards({ characters, onClose }) {


   return <>

      <div className={styled.container}>

         {characters.length === 0 ?

            (<p className={styled.palabra}> Busca algun personaje!! </p>) :

            characters.map((elemento) => {
               return <Card key={elemento.id}
                  id={elemento.id}
                  name={elemento.name}
                  species={elemento.species}
                  gender={elemento.gender}
                  image={elemento.image}
                  onClose={() => onClose(elemento.id)} />
            }

            )
         }
      </div>
   </>
};
