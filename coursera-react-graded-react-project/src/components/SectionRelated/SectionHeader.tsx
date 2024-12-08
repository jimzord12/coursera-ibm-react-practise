interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="relative flex justify-center mt-4">
      <div className="absolute w-full h-4 bg-slate-500/50 top-7" />
      <div className="z-10 w-1/3 py-4 rounded-lg shadow-2xl bg-slate-700">
        <h1 className="p-2 text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
