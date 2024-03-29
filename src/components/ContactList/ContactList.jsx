import Contact from "../Contact/Contact"
import styles from "../ContactList/contactList.module.css"

import { useSelector } from "react-redux"
import { filteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {
  
  const filters = useSelector(filteredContacts)

    return (
        <ul>
        { filters.map((el) =>(

        <li key={el.id}>
        <Contact data = {el}/>
        </li> 
         ))}

        </ul>
      
    )
}


export default ContactList;