"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export type ProductType = "customiq" | "gstiq";

export type TabItem = {
  label: string;
  value: string;
};

export type TabsProps = {
  tabs: TabItem[];
  product: ProductType;
  defaultTab?: string;
  queryKey?: string;
};

const PRODUCT_THEME: Record<ProductType, { primary: string }> = {
  customiq: {
    primary: "#863380",
  },
  gstiq: {
    primary: "#7D1C4A",
  },
};

export function Tabs({
  tabs,
  product,
  defaultTab,
  queryKey = "tab",
}: TabsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const theme = PRODUCT_THEME[product];

  const activeTab =
    searchParams.get(queryKey) || defaultTab || tabs[0]?.value;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(queryKey, value);
    params.set("product", product);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      style={{
        width: "fit-content",
        border: "1px dashed #A855F7",
        borderRadius: "16px",
        padding: "24px 28px",
      }}
    >
      <h2
        style={{
          marginBottom: "24px",
          fontSize: "24px",
          fontWeight: 500,
          color: "#000000",
        }}
      >
        Tabs
      </h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              style={{
                minWidth: "150px",
                padding: "12px 24px",
                borderRadius: "12px",
                border: `1px solid ${
                  isActive ? theme.primary : "#E2E8F0"
                }`,
                backgroundColor: isActive
                  ? theme.primary
                  : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#334155",
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "24px",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}