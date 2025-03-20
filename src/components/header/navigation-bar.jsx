import { AlignRight } from "lucide-react";
export default function NavigationBar() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold tracking-widest">Rx</h1>
      <AlignRight size={30} />
    </div>
  );
}
