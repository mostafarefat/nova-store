import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between items-center bg-secondary py-7 px-16">
      <div>
        <div className="flex items-center gap-2 ">
          <h2 className="text-4xl font-normal text-white  ">NOVA</h2>
          <Image
            src={"/images/Vector.svg"}
            alt="vector"
            width={23}
            height={25}
          ></Image>
        </div>
        <p className="text-white/40  text-sm leading-3 ">
          MEN & WOMEN ACCESSORIES
        </p>
      </div>
      <nav className="flex gap-6 text-white/40 font-medium text-base">
        <Link href={"/"}>HOME</Link>
        <Link href={"/"}>ABOUT</Link>
        <Link href={"/"}>PRODUCT</Link>
        <Link href={"/"}>PAGES</Link>
        <Link href={"/"}>CONTACT</Link>
      </nav>
      <div className="bg-dark text-accent text-sm py-3 px-6">
        <Link href={"/"}>SHOP NOW</Link>
      </div>
    </header>
  );
}
