import styled from "styled-components";

const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: var(--secondary);
`;

const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const ContactForm = styled.form`
  height: 100%;
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
  &:focus {
    outline: 1px solid var(--primary);
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
`;

export const Contact = () => {
  return (
    <>
      <ContactWrapper className="contact-wrapper" id="contact">
        <ContactContainer className="contact-container">
          <ContactForm className="contact-form">
            <Title>CONTACT</Title>
            <Div>
              <FormLabel htmlFor="">Name</FormLabel>
              <FormInput className="name" type="text" placeholder="Name..." />
            </Div>

            <Div>
              <FormLabel htmlFor="">Email</FormLabel>
              <FormInput className="email" type="text" placeholder="Email..." />
            </Div>

            <Div>
              <FormLabel htmlFor="">Message</FormLabel>
              <TextArea
                className="message"
                name=""
                id=""
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
