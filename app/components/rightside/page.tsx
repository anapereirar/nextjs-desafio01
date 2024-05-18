import React from "react";

export default function RightSide() {
  return (
    <>
      <div className="hidden sticky -mt-16 lg:max-w-custom-xs 2xl:block"
      style={{width:"17em"}}>
        <nav role="navigation" className="pt-20 sticky top-0 end-0">
          <h2 className="mb-3 lg:mb-3 uppercase tracking-wide font-bold text-sm text-secondary dark:text-secondary-dark px-4 w-full">
            En esta página
          </h2>
          <div
            className="h-full overflow-y-auto ps-4 max-h-[calc(100vh-7.5rem)]"
            style={{overscrollBehavior: "contain"}}
          >
            <ul className="space-y-2 pb-16">
              <li className="text-sm px-2 rounded-s-xl bg-highlight dark:bg-highlight-dark">
                <a
                  className="text-link dark:text-link-dark font-bold block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#"
                >
                  Overview
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#state-hooks"
                >
                  State Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#context-hooks"
                >
                  Context Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#ref-hooks"
                >
                  Ref Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#effect-hooks"
                >
                  Effect Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#performance-hooks"
                >
                  Performance Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#resource-hooks"
                >
                  Resource Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#other-hooks"
                >
                  Other Hooks{" "}
                </a>
              </li>
              <li className="text-sm px-2 rounded-s-xl">
                <a
                  className="text-secondary dark:text-secondary-dark block hover:text-link dark:hover:text-link-dark leading-normal py-2"
                  href="#your-own-hooks"
                >
                  Your own Hooks{" "}
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
