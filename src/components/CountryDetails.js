import React from 'react';
import CurrencyCoverter from './CurrencyCoverter';

const divStyle = {
    width: '15rem',
}

const CountryDetails = ({name, capital, population, flag, currencies}) => {

    if(!currencies){
        return (
            <div class="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-primary" role="status">
                        <span className="sr-only">Loading...</span>
            </div>
            </div>
        )}
   
    return (
         <React.Fragment>
        <div className="mt-5">
           <div className="row">
                 
               <div className="col-md-8">
                   <div className="my-3 p-3 bg-white rounded shadow-sm">
                      
                       <div>
                           <img src={flag} alt={flag} style={divStyle}/>
                            
                           <h2 className="font-weight-bold pt-5">{name}</h2>
                           <p>capital: <span className="font-weight-bold pt-5">{capital}</span></p>
                           <p>Population: <span className="font-weight-bold">{population}</span></p>
                           <p>Currency: <span className="font-weight-bold ">{currencies[0].name}</span></p>
                         
                
                       </div>
                   </div>
               </div>

                <div className="col-md-4">
                      <div className="my-3 p-3 bg-white rounded shadow-sm">
                            <p className="font-weight-bold pt-3 pb-2">Convert USD</p>
                           <CurrencyCoverter code={currencies[0].code} symbol={currencies[0].symbol} />
                          </div> 
                </div>

             
           </div>
        </div>
    </React.Fragment>
    )
}

export default CountryDetails
