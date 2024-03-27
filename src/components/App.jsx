import ContactForm from "./ContactForm/ContactForm"
import SearchBox from "./SearchBox/SearchBox"
import ContactList from "./ContactList/ContactList"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";

export const App = () => {

  const dispatch = useDispatch()
  const loading = useSelector(state => state.contacts.loading)
  const error = useSelector(state => state.contacts.error)

  useEffect(() => {

    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm />


      {loading && <p>Loading</p>}
      {error && <p>Error</p>}

      <SearchBox />
      <ContactList />

    </div>
  );
};




