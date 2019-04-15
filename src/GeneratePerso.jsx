import  React  from  'react';

const  GeneratePerso = ({ selectPerso }) => {
    return (
        <div  className="GeneratePerso">
        <button  onClick={selectPerso}>Get Perso</button>
        </div>
    );
};

export  default GeneratePerso ;