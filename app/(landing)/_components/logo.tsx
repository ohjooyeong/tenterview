import { CodeXml } from 'lucide-react';

const Logo = () => {
  return (
    <div className="md:flex items-center gap-x-2 mr-12">
      <CodeXml className="mr-2 h-4 w-4" />
      <p className="font-bold">Tenterview</p>
    </div>
  );
};

export default Logo;
