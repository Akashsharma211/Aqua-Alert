import { useNavigate } from "react-router-dom";

export default function RoleCard({ title, description, features, buttonText, theme }) {
  const navigate = useNavigate();

  const themes = {
    blue: "border-blue-100 dark:border-blue-900/50 bg-blue-50/30 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400",
    green: "border-green-100 dark:border-green-900/50 bg-green-50/30 dark:bg-green-900/10 text-green-700 dark:text-green-400",
    gray: "border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300",
  };

  const handleClick = () => {
    navigate("/auth", { state: { role: title } });
  };

  return (
    <div className={`flex flex-col border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:translate-y-[-4px] ${themes[theme]}`}>
      <h3 className="text-2xl font-bold mb-3 tracking-tight dark:text-white">
        {title}
      </h3>

      <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
        {description}
      </p>

      <ul className="flex-grow space-y-3 mb-8">
        {features.map((item, index) => (
          <li key={index} className="flex items-start text-sm text-slate-600 dark:text-slate-400">
            <span className="mr-2 mt-0.5 text-blue-500 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      <button
        onClick={handleClick}
        className="w-full py-3 px-4 rounded-xl text-white font-semibold transition-all shadow-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 active:scale-95"
      >
        {buttonText}
      </button>
    </div>
  );
}