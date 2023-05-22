import GoogleSignIn from "@/components/GoogleSignIn";

const Login = () => {
  return (
    <div className="flex flex-col items-center mt-4 gap-4">
      <h1 className="font-extrabold text-3xl">Login</h1>
      <GoogleSignIn />
    </div>
  );
};

export default Login;
