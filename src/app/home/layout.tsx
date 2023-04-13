import MenuHome from "@/components/home/menu";

const homeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-display">
      <header className="head">
        <MenuHome />
      </header>
      <main className="main">{children}</main>
    </div>
  );
};

export default homeLayout;
