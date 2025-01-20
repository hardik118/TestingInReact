import { useState } from "react";

export const Form= ()=>{
    const [state, setState]= useState('');
    const [Cities, setCities]= useState<string[]>([]);
    const [selectedCity, setSelectedCity]= useState('');

    const handleSubmit=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setState(e.target.value);
        setCities(stateCityMap[e.target.value] || []);
        console.log(state);

    }
    const stateCityMap: Record<string, string[]> = {
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"],
        Florida: ["Miami", "Orlando", "Tampa"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
      };
    
      const handleCity=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        setSelectedCity(e.target.value);
        console.log(selectedCity);

      }
    
    return <div>
       
            <label htmlFor="State">State</label>
            <select aria-label="State" name="State" value={state} onChange={handleSubmit} >
                {
                Object.keys(stateCityMap).map((State)=>{
                  return  <option value={State} key={State}>{State}</option>
                })
                }

            </select>

            <label htmlFor="Cities"> Cities</label>
            <select aria-label="Cities" name="Cities" id="Cities" value={selectedCity} onChange={handleCity}>
            <option value=""   disabled>Select a City</option>
                {
                   
                    Cities.map((city)=>{
                        return <option value={city} key={city}>{city}</option>
                    })
                }
            </select>
       

    </div>

}