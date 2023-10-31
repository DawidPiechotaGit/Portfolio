import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api/firebase";
import { Form } from "../components/form";
const getFormData = (e) => {
  const form = e.target;
  const { email, password } = form;

  const formData = {
    email: email.value,
    password: password.value,
  };

  return formData;
};

export const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = getFormData(e);
    signInWithEmailAndPassword(auth, email, password)
      .then((jwt) => {
        e.target.reset();
        alert("Success");
      })
      .catch((e) => {
        console.dir(e);
      });
  };

  return <Form submitText="Login" onSubmit={handleLogin} />;
};
