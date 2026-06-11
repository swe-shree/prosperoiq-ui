"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Tabs: () => Tabs
});
module.exports = __toCommonJS(index_exports);

// src/tabs.tsx
var import_navigation = require("next/navigation");
var import_clsx = __toESM(require("clsx"));
var import_jsx_runtime = require("react/jsx-runtime");
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
  const router = (0, import_navigation.useRouter)();
  const pathname = (0, import_navigation.usePathname)();
  const searchParams = (0, import_navigation.useSearchParams)();
  const activeColor = PRODUCT_THEME[product];
  const activeTab = searchParams.get(queryKey) || defaultTab || tabs[0]?.value;
  const handleTabChange = (value) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryKey, value);
    params.set("product", product);
    router.push(`${pathname}?${params.toString()}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-fit px-7 py-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { className: "mb-6 text-2xl font-medium text-slate-700", children: "Tabs" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "flex flex-wrap items-center gap-4", children: tabs.map((tab) => {
      const isActive = activeTab === tab.value;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "button",
        {
          type: "button",
          onClick: () => handleTabChange(tab.value),
          style: isActive ? {
            backgroundColor: activeColor,
            borderColor: activeColor
          } : void 0,
          className: (0, import_clsx.default)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
