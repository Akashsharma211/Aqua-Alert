import { useState } from "react";

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(true); 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "worker",
    phone: "",
    city: "",
    district: "",
    state: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log("Registering User with Location:", formData);
      alert(`Account created for ${formData.name} in ${formData.city}, ${formData.state}`);
    } else {
      alert("Logging in...");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 transition-all">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {isSignUp ? "Create Account" : "Aqua Alert"}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            {isSignUp 
              ? "Provide your details and location to join the network." 
              : "Sign in to access your monitoring dashboard."}
          </p>
        </div>

        <form onSubmit={handleAuth} className="grid grid-cols-1 md:grid-cols-6 gap-5">
          
          {/* USER NAME */}
          {isSignUp && (
            <div className="md:col-span-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">User Name</label>
              <input
                type="text" name="name" required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="Full Name" onChange={handleChange}
              />
            </div>
          )}

          {/* EMAIL */}
          <div className={isSignUp ? "md:col-span-3" : "md:col-span-6"}>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Email</label>
            <input
              type="email" name="email" required
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              placeholder="name@aqua.com" onChange={handleChange}
            />
          </div>

          {/* PHONE NO */}
          {isSignUp && (
            <div className="md:col-span-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Phone No.</label>
              <input
                type="tel" name="phone" required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="+91..." onChange={handleChange}
              />
            </div>
          )}

          {/* LOCATION SECTION - Only for Register */}
          {isSignUp && (
            <>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">City</label>
                <input
                  type="text" name="city" required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. Delhi" onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">District</label>
                <input
                  type="text" name="district" required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. Central" onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">State</label>
                <input
                  type="text" name="state" required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  placeholder="e.g. Delhi" onChange={handleChange}
                />
              </div>
            </>
          )}

          {/* ROLE & PASSWORD */}
          <div className={isSignUp ? "md:col-span-3" : "md:col-span-6"}>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">
                {isSignUp ? "Designated Role" : "Password"}
            </label>
            {isSignUp ? (
              <select
                name="role"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
                onChange={handleChange}
              >
                <option value="worker">Worker</option>
                <option value="supervisor">Supervisor</option>
                <option value="public">Public</option>
              </select>
            ) : (
              <input
                type="password" name="password" required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••" onChange={handleChange}
              />
            )}
          </div>

          {isSignUp && (
            <div className="md:col-span-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5 ml-1">Set Password</label>
              <input
                type="password" name="password" required
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                placeholder="••••••••" onChange={handleChange}
              />
            </div>
          )}

          {/* SUBMIT BUTTON */}
          <div className="md:col-span-6 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all active:scale-[0.98]"
            >
              {isSignUp ? "Register Account" : "Log In"}
            </button>
          </div>
        </form>

        {/* TOGGLE FOOTER */}
        <div className="mt-8 text-center text-sm">
          <p className="text-slate-500 dark:text-slate-400">
            {isSignUp ? "Already a verified user?" : "New to the system?"}
            <button
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-2 font-bold text-blue-600 hover:underline transition-colors"
            >
              {isSignUp ? "Log In" : "Register Profile"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}