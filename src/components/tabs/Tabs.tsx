type TabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
  tabs: { id: string; label: string }[];
  children: React.ReactNode; // İçerik burada olabilir veya Content component ayrı olabilir
};

export function Tabs({ tabs, activeTab, onTabChange, children }: TabsProps) {
  return (
    <>
      <div className="flex border-b border-gray-300 mb-4 bg-gray-50 text-gray-400 overflow-x-auto custom-scroll space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex justify-center items-center px-2 py-2 rounded-t-md hover:bg-gray-200 ${
              activeTab === tab.id
                ? "text-blue-400 border-b-2"
                : "text-gray-400"
            }`}
            style={{
              flexShrink: 0,
              minWidth: 120,
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{children}</div>
    </>
  );
}
