import React, { useContext, useState } from "react";

interface SideBar {
  isOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  closeSidebarDelay(): void;
}

const SidebarContext = React.createContext<SideBar>({
  isOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
  closeSidebarDelay: () => {},
});
const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(true);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const closeSidebarDelay = () => {
    const time = setTimeout(() => {
      closeSidebar();
    }, 400);

    return () => clearTimeout(time);
  };

  const sideBarValue: SideBar = {
    isOpen,
    openSidebar,
    closeSidebar,
    closeSidebarDelay,
  };
  return (
    <SidebarContext.Provider value={sideBarValue}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useGlobalContext = () => useContext(SidebarContext);
export default SidebarProvider;
