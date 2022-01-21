import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import DEX from "components/DEX";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Layout, Tabs } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Start from "components/Start";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
import Ramper from "components/Ramper";
import MenuItems from "./components/MenuItems";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Montserrat, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 15px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <MenuItems />
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
              chain="eth"
              image="/img/logo/wbtc.png"
              size="40px"
            />
            <NativeBalance />
            <Account />
          </div>
        </Header>

        <div style={styles.content}>
          <Switch>
            <Route exact path="/start">
              <Start isServerInfo={isServerInfo} />
            </Route>
            <Route path="/send">
              <Wallet />
            </Route>
            <Route path="/dex">
              <Tabs defaultActiveKey="1" style={{ alignItems: "center" }}>
                <Tabs.TabPane tab={<span>Ethereum</span>} key="1">
                  <DEX chain="eth" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Binance Smart Chain</span>} key="2">
                  <DEX chain="bsc" />
                </Tabs.TabPane>
                <Tabs.TabPane tab={<span>Polygon</span>} key="3">
                  <DEX chain="polygon" />
                </Tabs.TabPane>
              </Tabs>
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/buy">
              <Ramper />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/">
              <Redirect to="/start" />
            </Route>
            <Route path="/ethereum-boilerplate">
              <Redirect to="/start" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Connect" button</>
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          2022 © All Rights Reserved. monobank® is an applied trademark of {" "}
          <a href="https://monobank.com/" target="_blank" rel="noopener noreferrer">
            Monobank Inc.
          </a>{" "}
        </Text>
      </Footer>
    </Layout>
  );
};

export const Logo = () => (
  <a href="https://monobank.com" target="_blank">
    <div style={{ display: "flex", width: "130px"}}>
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="2140.000000pt" height="300.000000pt" viewBox="0 0 2140.000000 300.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
        <path d="M11663 2970 c-18 -10 -40 -34 -50 -52 -17 -31 -18 -103 -18 -1398 0
        -1295 1 -1367 18 -1398 10 -18 32 -42 50 -53 30 -18 47 -19 250 -17 l219 3 34
        37 c21 24 36 52 40 77 l6 39 52 -39 c81 -63 204 -118 313 -141 83 -17 122 -19
        258 -15 105 4 181 11 220 22 338 95 552 354 625 760 33 186 31 555 -5 725 -66
        318 -230 550 -470 665 -143 69 -201 80 -410 80 -157 0 -190 -3 -258 -23 -89
        -25 -180 -69 -250 -118 -26 -19 -49 -34 -52 -34 -3 0 -5 181 -5 401 0 536 23
        499 -317 499 -199 0 -221 -2 -250 -20z m1083 -1241 c152 -28 239 -123 286
        -316 18 -74 21 -118 21 -273 0 -155 -3 -199 -21 -273 -48 -197 -134 -289 -296
        -318 -194 -33 -364 45 -438 201 -55 116 -63 166 -63 410 0 209 2 229 23 289
        80 223 254 323 488 280z"/>
        <path d="M19463 2970 c-18 -10 -40 -34 -50 -52 -17 -31 -18 -103 -18 -1398 0
        -1295 1 -1367 18 -1398 37 -67 57 -72 292 -72 191 0 213 2 242 20 68 41 67 38
        73 417 l5 343 292 -307 c355 -375 413 -433 455 -455 29 -16 63 -18 282 -18
        233 0 251 1 282 20 21 14 39 36 50 67 16 40 16 49 3 84 -10 28 -139 173 -454
        510 -242 259 -448 482 -458 494 l-17 23 407 382 c271 253 412 392 420 413 15
        38 9 99 -14 133 -33 51 -53 54 -316 54 l-245 0 -55 -37 c-30 -21 -185 -161
        -344 -311 l-288 -274 -5 644 c-6 715 -1 675 -73 718 -29 18 -51 20 -242 20
        -191 0 -213 -2 -242 -20z"/>
        <path d="M945 2254 c-81 -18 -209 -76 -279 -127 l-50 -36 -12 36 c-7 20 -27
        50 -44 67 l-30 31 -213 3 c-208 3 -213 3 -247 -20 -75 -50 -70 21 -70 -1068 0
        -1088 -4 -1018 69 -1067 33 -22 42 -23 250 -23 197 0 219 2 248 20 70 43 67
        12 73 745 5 659 5 660 28 716 31 76 90 142 160 176 48 23 70 28 137 28 71 0
        88 -4 148 -33 73 -36 103 -68 141 -152 41 -90 46 -183 46 -815 0 -561 1 -591
        19 -619 42 -63 54 -66 291 -66 237 0 249 3 291 66 18 28 19 58 19 619 0 334 4
        627 10 675 14 119 66 222 134 268 27 18 74 39 104 48 94 28 222 3 295 -57 46
        -38 93 -135 107 -219 6 -39 10 -310 10 -675 0 -680 -2 -655 69 -702 33 -22 42
        -23 243 -23 231 0 248 4 290 62 l23 33 0 685 c0 621 -2 693 -18 774 -73 360
        -284 586 -606 651 -102 21 -304 16 -396 -9 -136 -37 -299 -136 -383 -231 l-39
        -44 -42 51 c-83 102 -186 172 -316 215 -69 22 -101 26 -235 29 -114 3 -174 -1
        -225 -12z"/>
        <path d="M4525 2254 c-220 -40 -374 -115 -519 -253 -152 -146 -244 -341 -277
        -588 -14 -105 -6 -556 11 -628 60 -256 154 -422 313 -556 121 -102 315 -182
        501 -208 113 -16 355 -13 466 4 436 71 711 343 791 785 22 118 19 569 -4 683
        -42 208 -123 365 -256 498 -150 150 -328 234 -566 269 -101 14 -366 11 -460
        -6z m423 -519 c167 -75 232 -242 232 -595 0 -353 -65 -519 -233 -596 -56 -26
        -73 -29 -167 -29 -133 0 -190 18 -263 85 -58 53 -95 119 -123 220 -27 96 -27
        544 -1 640 35 123 93 211 173 260 92 58 272 64 382 15z"/>
        <path d="M7385 2256 c-133 -27 -215 -63 -341 -152 l-62 -43 -6 41 c-4 22 -16
        54 -27 70 -39 54 -59 58 -287 58 -201 0 -210 -1 -243 -23 -73 -49 -69 21 -69
        -1067 0 -1089 -5 -1018 70 -1068 34 -23 38 -23 266 -20 232 3 232 3 259 28 57
        53 55 31 55 667 0 357 4 614 11 653 29 185 145 304 323 332 204 31 365 -57
        432 -238 18 -45 19 -98 24 -694 6 -717 3 -688 73 -730 29 -18 51 -20 257 -20
        252 0 270 4 307 72 17 31 18 76 18 688 -1 587 -2 665 -19 750 -65 348 -272
        592 -578 681 -94 28 -355 36 -463 15z"/>
        <path d="M9765 2254 c-220 -40 -374 -115 -519 -253 -152 -146 -244 -341 -277
        -588 -14 -105 -6 -556 11 -628 60 -256 154 -422 313 -556 121 -102 315 -182
        501 -208 113 -16 355 -13 466 4 436 71 711 343 791 785 22 118 19 569 -4 683
        -42 208 -123 365 -256 498 -150 150 -328 234 -566 269 -101 14 -366 11 -460
        -6z m423 -519 c167 -75 232 -242 232 -595 0 -353 -65 -519 -233 -596 -56 -26
        -73 -29 -167 -29 -133 0 -190 18 -263 85 -58 53 -95 119 -123 220 -27 96 -27
        544 -1 640 35 123 93 211 173 260 92 58 272 64 382 15z"/>
        <path d="M14907 2255 c-293 -56 -524 -210 -628 -420 -66 -133 -61 -229 13
        -275 30 -18 50 -20 239 -20 198 0 207 1 240 23 19 12 43 38 54 56 39 65 105
        129 158 152 73 32 214 38 304 14 112 -31 163 -102 179 -252 6 -59 6 -62 -17
        -68 -13 -3 -147 -23 -297 -45 -299 -43 -433 -73 -561 -125 -265 -108 -425
        -264 -477 -466 -22 -82 -22 -225 -1 -306 46 -174 172 -322 357 -418 130 -67
        210 -86 378 -92 250 -9 424 37 582 156 l55 42 5 -38 c3 -21 14 -51 24 -66 35
        -53 56 -57 284 -57 201 0 210 1 243 23 72 48 69 14 69 773 0 726 -3 772 -51
        917 -79 239 -286 411 -577 478 -118 28 -459 36 -575 14z m559 -1319 c-11 -153
        -57 -259 -146 -339 -167 -151 -516 -128 -591 38 -58 126 21 229 223 295 63 20
        433 87 492 89 l29 1 -7 -84z"/>
        <path d="M17735 2256 c-133 -27 -215 -63 -341 -152 l-62 -43 -6 41 c-4 22 -16
        54 -27 70 -39 54 -59 58 -287 58 -201 0 -210 -1 -243 -23 -73 -49 -69 21 -69
        -1067 0 -1089 -5 -1018 70 -1068 34 -23 38 -23 266 -20 232 3 232 3 259 28 57
        53 55 31 55 667 0 357 4 614 11 653 29 185 145 304 323 332 204 31 365 -57
        432 -238 18 -45 19 -98 24 -694 6 -717 3 -688 73 -730 29 -18 51 -20 257 -20
        252 0 270 4 307 72 17 31 18 76 18 688 -1 587 -2 665 -19 750 -65 348 -272
        592 -578 681 -94 28 -355 36 -463 15z"/>
        </g>
      </svg>
    </div>
  </a>
);

export default App;
