import Link from "next/link"
export default function Header(){
    return(
        
        <div className="header">
    <ul>
     <li><Link href="/">Home</Link></li>
     <li><Link href="./About">About</Link></li>
     <li><Link href="./Contact">Contact-Us</Link></li>
     <li><Link href="./Blogs">Blogs</Link></li>
    </ul>
    </div>
        )
    }