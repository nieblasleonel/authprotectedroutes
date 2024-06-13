import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button"
import Link from "next/link";


export default async function Home() {
  const { userId } = auth();  
  const user = await currentUser();
  if(!userId){
    redirect("/sign-in")
  }
  return (    
    <>
       <Button>
        <Link href={"/about-me"}>About me</Link>
       </Button>
       <Button>
        <Link href={"/dashboard"}>Dashboard</Link>
       </Button>
  </>
  );
}
