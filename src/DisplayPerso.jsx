import  React  from  'react';


                


const DisplayPerso = ({ perso }) => {

    return (
        <div  className="DisplayPerso">
            
            <ul>
                <li>  {perso.quote}</li>
                <li>
                     
                    {perso.character}
                </li>
                <li> <img  src={perso.image}/></li>
                <li>
                     {perso.characterDirection},
                    
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayPerso;