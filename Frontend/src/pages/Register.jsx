import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "worker",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-6 py-12">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-xl p-8 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Create Account
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">
            Join the Aqua Alert monitoring network
          </p>
        </div>

        <form className="space-y-5">
          <input name="name" placeholder="Full Name" onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800" />

          <input name="email" placeholder="Email" onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800" />

          <input name="phone" placeholder="Phone" onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800" />

          <select name="role" onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800">
            <option value="worker">Field Worker</option>
            <option value="supervisor">Supervisor</option>
            <option value="public">Public Contributor</option>
          </select>

          <input name="password" type="password" placeholder="Password" onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border dark:bg-slate-800" />

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl">
            Register Account
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-8">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}