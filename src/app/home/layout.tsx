import MenuHome from "@/common/menu";

const items = [
  {
    key: "1",
    label: "Materia 1",
  },
];

const homeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout-display">
      <header className="head">
        <MenuHome items={items} title="Mis Materias" />
      </header>
      <main className="main">{children}</main>
    </div>
  );
};

export default homeLayout;
