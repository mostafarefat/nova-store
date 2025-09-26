// components/BlogSection.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Post = {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string; // path under /public
  href: string;
};

const posts: Post[] = [
  {
    id: 1,
    category: "JEWELRY TRENDS",
    date: "23 JANUARY 2025",
    title: "TOP 5 TIMELESS JEWELRY TRENDS YOU'LL LOVE THIS YEAR",
    image: "/images/blog1.png",
    href: "/blog/post-1",
  },
  {
    id: 2,
    category: "CARE & TIPS",
    date: "23 JANUARY 2025",
    title: "HOW TO CLEAN AND MAINTAIN YOUR JEWELRY AT HOME",
    image: "/images/blog2.png",
    href: "/blog/post-2",
  },
  {
    id: 3,
    category: "INSPIRATION & STORIES",
    date: "23 JANUARY 2025",
    title: "THE STORY BEHIND NOVA'S MOST ICONIC DESIGNS",
    image: "/images/blog3.png",
    href: "/blog/post-3",
  },
];

export default function Blog() {
  return (
    <section className="py-32 px-37">
      <div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image
              src={"/images/icon1.svg"}
              alt="icon"
              width={18}
              height={18}
            />
            <span className="text-base tracking-wide text-emerald-900 font-semibold">
              BLOG &amp; NEWS
            </span>
          </div>
        </div>

        <div className="mt-4 flex justify-between mb-15">
          <h2 className="text-4xl md:text-5xl leading-tight font-normal text-dark">
            JEWELRY INSIGHTS &amp;
            <br />
            INSPIRATION
          </h2>
          <Link
            href={"/"}
            className="bg-dark text-accent text-sm h-12 pt-3 mt-4 font-normal px-6 uppercase   "
          >
            See All Insights
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((p) => (
            <article key={p.id} className="group">
              <div className="h-56 md:h-44 lg:h-52 relative overflow-hidden bg-gray-100">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={350}
                  height={230}
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority={false}
                />
              </div>

              <div className="mt-4 text-[11px] tracking-wide font-normal text-secondary">
                <span>OMI SPACE</span>
                <span className="mx-1 text-[#446150]">◆</span>
                <span>{p.category}</span>
                <span className="mx-1 text-[#446150]">◆</span>
                <span>{p.date}</span>
              </div>

              <h3 className="mt-3 text-lg md:text-lg font-normal text-dark">
                <Link href={p.href} className="hover:underline">
                  {p.title}
                </Link>
              </h3>

              <div className="mt-3">
                <Link href={p.href} className="text-sm underline text-dark">
                  READ MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div> {/* ← اتقفلت هنا */}
    </section>
  );
}

