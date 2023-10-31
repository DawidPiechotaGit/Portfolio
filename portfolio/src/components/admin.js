import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";

export const Admin = () => {
  const [contact, setContact] = useState([]);

  const getContact = () => {
    const contactRef = collection(db, "contact");

    getDocs(contactRef).then((querySnapshot) => {
      const contacts = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setContact(contacts);
    });
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <>
      {contact.length === 0 ? (
        <p> Loading</p>
      ) : (
        contact.map(({ id, name, email, phone, message }) => {
          return (
            <React.Fragment key={id}>
              <h1>{name}</h1>
              <p>{email}</p>
              <p>{phone}</p>
              <p>{message}</p>
            </React.Fragment>
          );
        })
      )}
    </>
  );
};
