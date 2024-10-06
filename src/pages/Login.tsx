import loginImg from "@assets/login.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="py-24 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg">
        <div className="flex items-center justify-between gap-8 p-4">
          <div className="w-full lg:w-1/2">
            <form>
              <h1 className="text-2xl font-bold text-myGreen-dark mb-5">
                مرحبا !
              </h1>
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
              <Link to="/register" className="hover:underline block mb-5">
                مشترك جديد؟
              </Link>
              <button
                type="submit"
                className="w-full bg-myGreen-dark text-white rounded p-2 hover:bg-myGreen-hover transition-colors"
              >
                دخول
              </button>
            </form>
          </div>
          <div className="hidden lg:block w-1/2">
            <img src={loginImg} alt="register" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
