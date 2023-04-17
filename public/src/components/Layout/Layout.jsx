import { LayoutWrapper } from "./Layout.styles"
import useViewport from "../../hooks/useViewport";
import { ViewportContext } from "../../context/ViewportContext";

const Layout = ({ children }) => {
    const width = useViewport();
    const isMobile = width <= 767;
    const deviceClass = isMobile ? "mobile" : "desktop";
  
    return (
        <ViewportContext.Provider>
            <LayoutWrapper class={deviceClass}>{children}</LayoutWrapper>
        </ViewportContext.Provider>
    )
};

export default Layout;