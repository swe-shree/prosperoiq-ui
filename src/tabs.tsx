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

const PRODUCT_THEME: Record<ProductType, { activeClass: string }> = {
  customiq: {
    activeClass: "border-[#863380] bg-[#863380] text-white",
  },
  gstiq: {
    activeClass: "border-[#7D1C4A] bg-[#7D1C4A] text-white",
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

  const activeTab = searchParams.get(queryKey) || defaultTab || tabs[0]?.value;

  const handleTabChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(queryKey, value);
    params.set("product", product);

    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-fit rounded-2xl border border-dashed border-[#A855F7] px-7 py-6">
      <h2 className="mb-6 text-2xl font-medium text-black">Tabs</h2>

      <div className="flex flex-wrap items-center gap-4">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.value;

          return (
            <button
              key={tab.value}
              type="button"
              onClick={() => handleTabChange(tab.value)}
              className={`min-w-[150px] rounded-xl border px-6 py-3 text-lg font-medium leading-6 transition-all duration-200 cursor-pointer ${
                isActive
                  ? theme.activeClass
                  : "border-[#E2E8F0] bg-white text-[#334155]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}