type Props = {
  children: React.ReactNode;
};

const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="bg-slate-950 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-200 dark:text-slate-950 font-semibold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
