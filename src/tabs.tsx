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
  <div className="w-fit rounded-2xl border border-dashed border-purple-500 px-7 py-6">
    <h2 className="mb-8 text-[24px] font-medium text-black">Tabs</h2>

    <div className="flex items-center gap-4">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            type="button"
            onClick={() => handleTabChange(tab.value)}
            style={{
              backgroundColor: isActive ? theme.primary : "#FFFFFF",
              borderColor: isActive ? theme.primary : "#E2E8F0",
              color: isActive ? "#FFFFFF" : "#334155",
            }}
            className="min-w-[140px] rounded-xl border px-5 py-2.5 text-[18px] font-medium leading-6 transition-all hover:bg-slate-50"
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  </div>
);
}