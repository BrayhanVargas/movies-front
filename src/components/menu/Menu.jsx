import { useNavigate } from "react-router-dom";
import "./Menu.css";
import { IconButton } from "@mui/material";
import SupportIcon from "@mui/icons-material/Support";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import useMediaQuery from "@mui/material/useMediaQuery";

const Menu = () => {
  const isMobile = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <>
      {isMobile ? (
        <div className="menu-container">
          <SupportIcon
            fontSize="large"
            sx={{ marginBottom: "20px", paddingTop: "20px" }}
          />
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <HomeIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <LogoutIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </div>
      ) : (
        <div className="menu-container--mobile">
          <SupportIcon
            fontSize="large"
            sx={{ marginBottom: "20px", paddingTop: "20px" }}
          />
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <HomeIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
          <IconButton
            type="button"
            onClick={() => handleLogout()}
            variant="contained"
          >
            <LogoutIcon fontSize="large" sx={{ color: "white" }} />
          </IconButton>
        </div>
      )}
    </>
  );
};

export default Menu;
