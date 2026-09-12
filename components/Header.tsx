"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[70] bg-[#fcfaf5]">
        <div className="relative mx-auto max-w-[1200px] px-8 py-4">
          {!isHome && (
            <Link
              href="/"
              className="text-[11px] font-serif tracking-[0.08em]"
            >
              CONTRECHAMP
            </Link>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="メニューを開く"
            className="absolute right-8 top-4 z-[80] flex flex-col gap-1.5 p-2"
          >
            <span className="block h-px w-7 bg-neutral-900" />
            <span className="block h-px w-7 bg-neutral-900" />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/7"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Side Menu */}
      <aside
        className={`fixed top-0 right-0 z-[80] h-screen w-[400px] max-w-[85vw] bg-white transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col px-10 py-8">

          {/* Close */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="メニューを閉じる"
              className="p-2"
            >
              <span className="block h-px w-7 rotate-45 bg-neutral-900" />
              <span className="-mt-px block h-px w-7 -rotate-45 bg-neutral-900" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="mt-20">
            <ul className="space-y-7">

              {/* HOME */}
              <li>
                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  HOME
                </Link>
              </li>

              {/* LATEST */}
              <li>
                <Link
                  href="/latest"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  LATEST
                </Link>
              </li>

              {/* ARCHIVE */}
              <li>
                <Link
                  href="/archive"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  ARCHIVE
                </Link>
              </li>

              {/* THEME INDEX */}
              <li className="pt-6">
                <Link
                  href="/theme"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  THEME INDEX
                </Link>

                <p className="mt-2 text-xs leading-6 text-neutral-400">
                  映画をめぐる主題
                </p>
              </li>

              {/* ABOUT */}
              <li>
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  ABOUT
                </Link>

                <p className="mt-2 text-xs leading-6 text-neutral-400">
                  CONTRECHAMPについて
                </p>
              </li>

              {/* CONTRIBUTION */}
              <li>
                <Link
                  href="/contribution"
                  onClick={() => setIsOpen(false)}
                  className="text-sm tracking-[0.18em] hover:opacity-50"
                >
                  CONTRIBUTION
                </Link>
              </li>

            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto border-t border-neutral-200 pt-6">
            <p className="text-xs tracking-[0.18em] text-neutral-400">
              CONTRECHAMP
            </p>

            <p className="mt-2 text-xs leading-5 text-neutral-400">
              映画から世界へ向けて思考を開く
            </p>
          </div>

        </div>
      </aside>
    </>
  );
}