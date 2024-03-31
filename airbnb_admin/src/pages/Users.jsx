import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return (
    <>
      <Heading as="h1">새로운 사용자 만들기</Heading>
      <SignupForm />
    </>
  );
}

export default NewUsers;
