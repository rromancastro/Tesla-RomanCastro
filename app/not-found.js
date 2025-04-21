import Image from "next/image";
import Link from "next/link";

export default function NotFound() {    
  return (
    <div style={{display: 'flex', flexDirection: 'column',gap: '20px', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <Image src={"/teslaIcon.webp"} alt="404" width={100} height={100}/>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href={"/"} style={{color: 'black'}}><p>Go to back home.</p></Link>
    </div>
  );
}