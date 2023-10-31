import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../api/firebase";
import styled from "styled-components";

const AdminContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5% 20%;
  background: var(--background);
`;

const AdminCard = styled.div`
  padding: 30px;
  color: white;
  background: var(--secondary);
  border-radius: 5px;
  margin: 20px;
  letter-spacing: 0.07em;
`;

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
      <AdminContainer>
        {contact.length === 0 ? (
          <p>No Respone</p>
        ) : (
          contact.map(({ id, name, email, phone, message }) => {
            return (
              <AdminCard>
                <React.Fragment key={id}>
                  <h1 style={{ paddingBottom: "25px", fontSize: "25px" }}>
                    {name}
                  </h1>
                  <p style={{ paddingBottom: "15px" }}>Email: {email}</p>
                  <p style={{ paddingBottom: "15px" }}>Phone: {phone}</p>
                  <p>{message}</p>
                </React.Fragment>
              </AdminCard>
            );
          })
        )}
      </AdminContainer>
    </>
  );
};
