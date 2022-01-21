import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "15px",
        fontWeight: "400",
        width: "100%",
        justifyContent: "center",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/start">
        <NavLink to="/start">🚀 Start</NavLink>
      </Menu.Item>
      <Menu.Item key="/dex">
        <NavLink to="/dex">💻 DEX</NavLink>
      </Menu.Item>
      <Menu.Item key="buy">
        <NavLink to="/buy">💳 Buy Crypto</NavLink>
      </Menu.Item>
      <Menu.Item key="/send">
        <NavLink to="/send">💸 Send</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">📊 Balance</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">📝 Transactions</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">👾 NFT</NavLink>
      </Menu.Item>
      <Menu.Item key="/contract">
        <NavLink to="/contract">📃 Contract</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
