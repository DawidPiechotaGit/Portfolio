import styled from "styled-components";

const ContactWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: blue;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  width: 50%;
  height: 5vh;
`;

export const Contact = () => {
  return (
    <>
      <ContactWrapper className="contact-wrapper">
        <div className="contact-container">
          <ContactForm className="contact-form">
            <label htmlFor="">Name</label>
            <FormInput className="name" type="text" placeholder="Name..." />
            <label htmlFor="">Email</label>
            <FormInput className="email" type="text" placeholder="Email..." />
            <label htmlFor="">Message</label>
            <textarea
              className="message"
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Message..."
            ></textarea>
          </ContactForm>
        </div>
      </ContactWrapper>
    </>
  );
};
