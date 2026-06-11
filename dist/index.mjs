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
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        width: "fit-content",
        border: "1px dashed #A855F7",
        borderRadius: "16px",
        padding: "24px 28px"
      },
      children: [
        /* @__PURE__ */ jsx(
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
        /* @__PURE__ */ jsx(
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
              return /* @__PURE__ */ jsx(
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
export {
  Tabs
};
