import { Description } from "@/components/Description";
import { Title } from "@/components/Title";
import { Button } from "./components/ui/button";


export default function App() {
  return (
    <>
      <Title value="Hello world" /> {/*value aqui é uma props */}
      <Description value="Its my first page!" />
      <Button>default</Button>
      <Button variant={"secondary"}>secondary</Button>
      <Button variant={"destructive"}>destructive</Button>
    </>
  );
}
