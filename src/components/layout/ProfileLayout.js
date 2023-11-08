import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  
} from "react-icons/ai";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList} from "react-icons/fa";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import '../../styles/dashboard.css';


const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const {user:currUser} = useSelector((state) => state.auth);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" >
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo" style={{fontSize:"30px", color:"#fff"}}>DC</span>
            <NavLink to="/">
            <span className="lg-logo" style={{fontSize:"35px", color:"#fff"}}>The laundry</span>
            </NavLink>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "profile",
              icon: <AiOutlineUser className="fs-4 " size={26}/>,
              label: <span style={{ fontSize: 18 }}> Thông Tin Cá Nhân</span>
            },
            {
              key: "history",
              icon: <AiOutlineShoppingCart className="fs-4 " size={26} />,
              label: <span style={{ fontSize: 18 }}>Lịch Sử Đơn Hàng</span>
            },
            
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative"  >
              <IoIosNotifications className="fs-4" style={{ width: '30px', height: '30px' }}/>
              <span className="badge bg-warning rounded-circle p-1 position-absolute" style={{ width: '15px', height: '15px' }}>
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">{currUser.userInfoDTO.email}</h5>
                <p className="mb-0">{currUser.userInfoDTO.fullName}</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Logout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;