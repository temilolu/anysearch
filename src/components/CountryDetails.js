import React from 'react';
import CurrencyCoverter from './CurrencyCoverter';


const CountryDetails = ({name, capital, population, flag}) => {
   
    return (
         <React.Fragment>
        <div className="mt-5">
           <div className="row">
                 
               <div className="col-md-8">
                   <div className="my-3 p-3 bg-white rounded shadow-sm">
                      
                       <div>
                           <img src={flag} alt={flag} />
                            
                           <h2>{name}</h2>
                           <h4>{capital}</h4>
                           <p>{population}</p>
                       </div>
                   </div>
               </div>

                <div className="col-md-4">
                      <div className="my-3 p-3 bg-white rounded shadow-sm">
                           <h3>Convert SEK to local currency</h3>
                           <CurrencyCoverter />
                          </div> 
                </div>

             
           </div>
        </div>
    </React.Fragment>
    )
}

export default CountryDetails
