
import Navbar from "@/components/Navbar";
import DataShower from "./DataShower";
import Header from "@/components/Header";
import InventoryCountChart from "@/components/InventoryCountChart";
import jsonData from '../../server/data/csvjson.json'
import AverageMsrpChart from "@/components/AverageMsrpChart";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10">
        <Header />
        <hr />
        <DataShower />
        <InventoryCountChart data={jsonData}/>
        <AverageMsrpChart data={jsonData} />
      </main>
      
    </>
    
  );
}
