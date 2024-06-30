import Navbar from "@/components/Navbar";
import DataShower from "./DataShower";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="px-10">
        <Header />
        <hr />
        <DataShower />
      </main>
      
    </>
    
  );
}
