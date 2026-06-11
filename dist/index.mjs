// src/tabs.tsx
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { jsx, jsxs } from "react/jsx-runtime";
var PRODUCT_THEME = {
  customiq: {
    primary: "#863380"
  },
  gstiq: {
    primary: "#7D1C4A"
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
  return /* @__PURE__ */ jsxs("div", { className: "w-fit rounded-lg border border-dashed border-purple-500 px-7 py-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "mb-8 text-[24px] font-medium text-black", children: "Tabs" }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-10", children: tabs.map((tab) => {
      const isActive = activeTab === tab.value;
      return /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => handleTabChange(tab.value),
          style: isActive ? {
            backgroundColor: theme.primary,
            borderColor: theme.primary,
            color: "#FFFFFF"
          } : {
            backgroundColor: "#FFFFFF",
            borderColor: "#E2E8F0",
            color: "#334155"
          },
          className: "min-w-[178px] rounded-2xl border px-8 py-3 text-[20px] font-medium leading-6 transition-all hover:bg-slate-50",
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
