import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <form>
      <h1 className="text-2xl font-bold text-myGreen-dark mb-5">مرحبا !</h1>
      <input
        type="email"
        placeholder="البريد الالكتروني"
        required
        className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
      />
      <input
        type="password"
        placeholder="كلمة المرور"
        required
        className="w-full p-2 border border-gray-300 rounded mb-3 outline-none"
      />
      <Link to="#" className="hover:underline block mb-3">
        هل نسيت كلمة المرور..؟
      </Link>
      <Link to="/auth/register" className="hover:underline block mb-5">
        مشترك جديد؟
      </Link>
      <button
        type="submit"
        className="w-full bg-myGreen-dark text-white rounded p-2 hover:bg-myGreen-hover transition-colors"
      >
        دخول
      </button>
    </form>
  );
};

export default LoginForm;
