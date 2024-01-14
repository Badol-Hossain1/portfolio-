"use client";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const links = [
  { text: "Home", href: "#home" },
  { text: "Portfolio", href: "#" },
  { text: "Resume", href: "#" },
  { text: "Services", href: "#" },
  { text: "Blog", href: "#" },
  { text: "Contact", href: "#" },
  { text: "About", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <header className="bg-[#FFFFFF]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className={`text-sm font-semibold leading-6 px-3 py-1 rounded-md shadow-md
              ${activeIndex === index ? 'text-white bg-gray-400' : 'text-black focus:bg-slate-500 hover:bg-gray-50'}`}
            onClick={() => setActiveIndex(index)}
            >
              {link.text}
            </a>
          ))}
        </Popover.Group>
        <div className="hidden  lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/resume.pdf"
            download
            className="text-sm rounded-lg flex px-3 py-2 gap-2 uppercase         font-semibold leading-6 text-white bg-red-600"
          >
            Download Cv{" "}
            <svg
              className="animate-bounce w-6 h-6 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="down-arrow"
            >
              <path
                fill="#6563ff"
                d="m7.293 12.707 4 4a1.004 1.004 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414Z"
              ></path>
              <path
                fill="#b2b1ff"
                d="M12 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10ZM7.293 11.293a1 1 0 0 1 1.414 0L11 13.586V8a1 1 0 0 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.004 1.004 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
              ></path>
            </svg>
            {/* <span aria-hidden="true">&rarr;</span> */}
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 bg-white" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {links.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {link.text}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/resume.pdf"
                  download
                  className="text-sm gap-2 flex uppercase         font-semibold leading-6 text-gray-900"
                >
                  Download Cv{" "}
                  <svg
                    className="animate-bounce w-6 h-6 "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    id="down-arrow"
                  >
                    <path
                      fill="#6563ff"
                      d="m7.293 12.707 4 4a1.004 1.004 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414Z"
                    ></path>
                    <path
                      fill="#b2b1ff"
                      d="M12 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10ZM7.293 11.293a1 1 0 0 1 1.414 0L11 13.586V8a1 1 0 0 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.004 1.004 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
