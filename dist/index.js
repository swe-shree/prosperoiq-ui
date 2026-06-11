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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "div",
    {
      style: {
        width: "fit-content",
        border: "1px dashed #A855F7",
        borderRadius: "16px",
        padding: "24px 28px"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "h2",
          {
            style: {
              marginBottom: "24px",
              fontSize: "24px",
              fontWeight: 500,
              color: "#000000"
            },
            children: "Tabs"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: "16px",
              flexWrap: "wrap"
            },
            children: tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  type: "button",
                  onClick: () => handleTabChange(tab.value),
                  style: {
                    minWidth: "150px",
                    padding: "12px 24px",
                    borderRadius: "12px",
                    border: `1px solid ${isActive ? theme.primary : "#E2E8F0"}`,
                    backgroundColor: isActive ? theme.primary : "#FFFFFF",
                    color: isActive ? "#FFFFFF" : "#334155",
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: "24px",
                    cursor: "pointer",
                    transition: "all 0.2s ease"
                  },
                  children: tab.label
                },
                tab.value
              );
            })
          }
        )
      ]
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tabs
});
