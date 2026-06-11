"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Tabs: () => Tabs
});
module.exports = __toCommonJS(index_exports);

// src/tabs.tsx
var import_navigation = require("next/navigation");
var import_jsx_runtime = require("react/jsx-runtime");
var PRODUCT_THEME = {
  customiq: {
    activeClass: "border-[#863380] bg-[#863380] text-white"
  },
  gstiq: {
    activeClass: "border-[#7D1C4A] bg-[#7D1C4A] text-white"
  }
};
function Tabs({
  tabs,
  product,
  defaultTab,
  queryKey = "tab"
}) {
  const router = (0, import_navigation.useRouter)();
  const pathname = (0, import_navigation.usePathname)();
  const searchParams = (0, import_navigation.useSearchParams)();
  const theme = PRODUCT_THEME[product];
  const activeTab = searchParams.get(queryKey) || defaultTab || tabs[0]?.value;
  const handleTabChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, value);
    params.set("product", product);
    router.push(`${pathname}?${params.toString()}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-fit rounded-2xl border border-dashed border-[#A855F7] px-7 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "mb-6 text-2xl font-medium text-black", children: "Tabs" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap items-center gap-4", children: tabs.map((tab) => {
      const isActive = activeTab === tab.value;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: () => handleTabChange(tab.value),
          className: `min-w-[150px] rounded-xl border px-6 py-3 text-lg font-medium leading-6 transition-all duration-200 cursor-pointer ${isActive ? theme.activeClass : "border-[#E2E8F0] bg-white text-[#334155]"}`,
          children: tab.label
        },
        tab.value
      );
    }) })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
