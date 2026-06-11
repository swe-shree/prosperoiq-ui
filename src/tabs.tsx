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
    <div className="w-fit rounded-lg border border-dashed border-purple-500 px-7 py-6">
      <h2 className="mb-8 text-[24px] font-medium text-black">Tabs</h2>

      <div className="flex items-center gap-10">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              style={
                isActive
                  ? {
                      backgroundColor: theme.primary,
                      borderColor: theme.primary,
                      color: "#FFFFFF",
                    }
                  : {
                      backgroundColor: "#FFFFFF",
                      borderColor: "#E2E8F0",
                      color: "#334155",
                    }
              }
              className="min-w-[178px] rounded-2xl border px-8 py-3 text-[20px] font-medium leading-6 transition-all hover:bg-slate-50"
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}