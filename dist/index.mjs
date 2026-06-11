// src/tabs.tsx
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var PRODUCT_THEME = {
  customiq: {
    activeClassName: "border-[#863380] bg-[#863380]"
  },
  gstiq: {
    activeClassName: "border-[#7D1C4A] bg-[#7D1C4A]"
  }
};
function Tabs({
  tabs,
  product,
  defaultTab,
  queryKey = "tab"
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const theme = PRODUCT_THEME[product];
  const activeTab = searchParams.get(queryKey) || defaultTab || tabs[0]?.value;
  const handleTabChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, value);
    params.set("product", product);
    router.push(`${pathname}?${params.toString()}`);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "w-fit rounded-2xl border border-dashed border-purple-500 px-7 py-6",
      children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-medium text-black", children: "Tabs" }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: tabs.map((tab) => {
          const isActive = activeTab === tab.value;
          return /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              onClick: () => handleTabChange(tab.value),
              className: clsx(
                "min-w-[150px] cursor-pointer rounded-xl border px-6 py-3 text-lg font-medium leading-6 transition-all duration-200",
                isActive ? clsx(theme.activeClassName, "text-white") : "border-slate-200 bg-white text-slate-700"
              ),
              children: tab.label
            },
            tab.value
          );
        }) })
      ]
    }
  );
}
export {
  Tabs
};
