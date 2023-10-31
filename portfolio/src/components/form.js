import styled from "styled-components";

const FormContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = ({ submitText, isPasswordHidden = false, onSubmit }) => (
  <FormContainer className="form-container">
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
      {!isPasswordHidden && (
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
      )}
      <button>{submitText}</button>
    </form>
  </FormContainer>
);
