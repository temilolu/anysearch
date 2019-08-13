import React from 'react';
import CurrencyCoverter from './CurrencyCoverter';

const divStyle = {
    width: '15rem',
}

const CountryDetails = ({name, capital, population, flag, currencies}) => {

    if(!currencies){
        return (<span>Loading...</span>)
    }
   
    return (
         <React.Fragment>
        <div className="mt-5">
           <div className="row">
                 
               <div className="col-md-8">
                   <div className="my-3 p-3 bg-white rounded shadow-sm">
                      
                       <div>
                           <img src={flag} alt={flag} style={divStyle}/>
                            
                           <h2>{name}</h2>
                           <h4>{capital}</h4>
                           <p>{population}</p>
                           <p>{currencies[0].name}</p>
                         
                
                       </div>
                   </div>
               </div>

                <div className="col-md-4">
                      <div className="my-3 p-3 bg-white rounded shadow-sm">
                            <h3>Convert EUR to {name}</h3>
                           <CurrencyCoverter code={currencies[0].code} symbol={currencies[0].symbol} />
                          </div> 
                </div>

             
           </div>
        </div>
    </React.Fragment>
    )
}

export default CountryDetails
