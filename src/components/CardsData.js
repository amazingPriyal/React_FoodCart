import react,{useEffect,useState} from 'react';
//import BookCards from './BookCards';
//import OrderStatus from './OrderStatus';
import api from './books';
//import { assertTSBigIntKeyword } from '@babel/types';
import Cards from './Cards';

const CardsData = () => {
    const [contacts, setContacts] = useState([]);
  const retriveBook = async () => {
    const response = await api.get("./Cardsdata");
   
    setContacts(response.data); 
    console.log(response.data)  
    //return response.data;
  }
  
  console.log(contacts);
  useEffect(()=>{  
    retriveBook();
    
   },[]);
    return(
        <div>
        <h2 className='text-center'>Add to Cart Projects</h2>
            {
               contacts.length > 0 ?
                contacts.map((contact) => {
                    return (
                       <div>
                       
                       <Cards resource={contact}/>                      
                       </div>
                    )
                }) : <p>loadingggg</p>
            } 
        </div>
    )
}  
export default CardsData; 