type Props = {
  children: React.ReactNode;
  title: string;
  description?: string;
  items: "start" | "center";
};

const PageShell = ({ children, ...props }: Props) => {
  return (
    <div className={`items-${props.items} mx-56 flex flex-col`}>
      <div className={`items-${props.items} mb-8 flex flex-col`}>
        <h1 className="font-bold text-5xl"> {props.title} </h1>
        <p className="text-slate-500 text-xl"> {props.description || ""}</p>
      </div>
      {children}
    </div>
  );
};

export default PageShell;
