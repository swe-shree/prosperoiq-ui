import "./styles.css";

// src/tabs.tsx
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import clsx from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
var PRODUCT_THEME = {
  customiq: "#863380",
  gstiq: "#7D1C4A"
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
  const activeColor = PRODUCT_THEME[product];
  const activeTab = searchParams.get(queryKey) || defaultTab || tabs[0]?.value;
  const handleTabChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, value);
    params.set("product", product);
    router.push(`${pathname}?${params.toString()}`);
  };
  return /* @__PURE__ */ jsxs("div", { className: "w-fit px-7 py-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-6 text-2xl font-medium text-slate-700", children: "Tabs" }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap items-center gap-4", children: tabs.map((tab) => {
      const isActive = activeTab === tab.value;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => handleTabChange(tab.value),
          style: isActive ? {
            backgroundColor: activeColor,
            borderColor: activeColor
          } : void 0,
          className: clsx(
            "min-w-[165px] rounded-lg border px-8 py-2.5 text-[18px] font-medium leading-6 transition-all duration-200 outline-none focus:outline-none focus:ring-0 focus-visible:ring-0",
            isActive ? "text-white" : "mborder-slate-200 bg-white text-slate-700 hover:bg-slate-50"
          ),
          children: tab.label
        },
        tab.value
      );
    }) })
  ] });
}
export {
  Tabs
};
