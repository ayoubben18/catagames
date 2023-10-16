import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar";
import { Box } from "@chakra-ui/react";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  );
};

export default Layout;
