import styled from "styled-components";

const LoginForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--secondary);
`;

const FormInput = styled.input`
  width: 30vw;
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

const FormLabel = styled.label`
  padding: 5px 0;
  color: var(--text);
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  <FormContainer className="form-container">
    <LoginForm onSubmit={onSubmit}>
      <Div>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" name="email" id="email" />
      </Div>
      {!isPasswordHidden && (
        <Div>
          <FormLabel htmlFor="password">Password</FormLabel>
          <FormInput type="password" name="password" id="password" />
        </Div>
      )}
      <SubmitBTN>{submitText}</SubmitBTN>
    </LoginForm>
  </FormContainer>
);
