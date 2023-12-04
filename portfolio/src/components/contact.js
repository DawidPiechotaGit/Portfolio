import styled from "styled-components";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../api/firebase";

const ContactWrapper = styled.div`
  width: 100%;
  background: var(--secondary);
`;

const ContactContainer = styled.div`
  width: 100%;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const FormLabel = styled.label`
  padding: 5px 0;
  color: var(--text);
`;

const FormInput = styled.input`
  width: 50vw;
  height: 5vh;
  border: none;
  padding: 15px;
  font-family: inherit;
  background: var(--background);
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0.07em;
  outline: none;
  &:focus {
    outline: 1px solid var(--primary);
  }
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const TextArea = styled.textarea`
  width: 50vw;
  border: none;
  padding: 15px;
  font-family: inherit;
  background: var(--background);
  color: var(--text);
  font-weight: 700;
  letter-spacing: 0.07em;
  outline: none;
  resize: none;
  &:focus {
    outline: 1px solid var(--primary);
  }
  @media (max-width: 600px) {
    width: 80vw;
  }
`;

const Title = styled.h1`
  color: white;
`;

const SubmitBTN = styled.button`
  width: 20%;
  align-self: center;
  padding: 15px;
  margin-top: 30px;
  border: none;
  background-color: transparent;
  border: 1px solid var(--primary);
  color: white;
  font-family: inherit;
  font-weight: 700;
  font-size: 15px;
  &:hover {
    transition: all 0.7s ease-out;
    background-color: var(--primary);
    cursor: pointer;
  }
  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, phone, message } = event.target.elements;

    const contact = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };

    console.log(contact);

    const contactCollection = collection(db, "contact");
    addDoc(contactCollection, contact).then(() => {
      alert("Success!");
    });

    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";
  };
  return (
    <>
      <ContactWrapper className="contact-wrapper" id="contact">
        <ContactContainer className="contact-container">
          <ContactForm className="contact-form hidden" onSubmit={handleSubmit}>
            <Title>CONTACT</Title>
            <Div>
              <FormLabel htmlFor="">Name</FormLabel>
              <FormInput
                className="name"
                name="name"
                id="name"
                type="text"
                placeholder="Name..."
              />
            </Div>

            <Div>
              <FormLabel htmlFor="">Email</FormLabel>
              <FormInput
                className="email"
                type="email"
                placeholder="Email..."
                name="email"
                id="email"
              />
            </Div>

            <Div>
              <FormLabel htmlFor="">Phone</FormLabel>
              <FormInput
                className="phone"
                type="number"
                placeholder="Phone Number..."
                name="phone"
                id="phone"
              />
            </Div>

            <Div>
              <FormLabel htmlFor="">Message</FormLabel>
              <TextArea
                className="message"
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message..."
              ></TextArea>
              <SubmitBTN type="submit">Send</SubmitBTN>
            </Div>
          </ContactForm>
        </ContactContainer>
      </ContactWrapper>
    </>
  );
};
