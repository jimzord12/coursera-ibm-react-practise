interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="flex relative justify-center mt-4">
      <div className="absolute w-full h-4 bg-slate-500/50 top-7" />
      <div className="w-1/3 bg-slate-700 py-4 rounded-lg z-10 shadow-2xl">
        <h1 className="text-3xl">{title}</h1>
      </div>
    </div>
  );
};

export default SectionHeader;
