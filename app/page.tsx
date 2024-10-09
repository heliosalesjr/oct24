import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <>
        <div className="text-center container my-4 mx-auto">
          <h1 className="text-3xl mb-4">My Home, Homies!</h1>
          <div className="flex gap-2 justify-center">
            <Button>Click me!</Button>
            <Button>Click me!</Button>
          </div>
        </div>
      </>
    </>
  );
}
