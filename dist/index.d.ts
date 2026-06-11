import * as react from 'react';

type ProductType = "customiq" | "gstiq";
type TabItem = {
    label: string;
    value: string;
};
type TabsProps = {
    tabs: TabItem[];
    product: ProductType;
    defaultTab?: string;
    queryKey?: string;
};
declare function Tabs({ tabs, product, defaultTab, queryKey, }: TabsProps): react.JSX.Element;

export { type ProductType, type TabItem, Tabs, type TabsProps };
