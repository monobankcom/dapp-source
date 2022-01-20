import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function Start({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(() => (Moralis.Plugins?.oneInch ? true : false), [Moralis.Plugins?.oneInch]);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              🔗 <Text strong>Connet your Wallet</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="🔓">
              <Text style={styles.text}>
                Click <Text strong>Connect</Text> at the top right corner of the screen to unlock your wallet
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✔">
              <Text style={styles.text}>
                By connecting a wallet, you agree to monobank{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://monobank.com/terms">
                  Terms of Service
                </a>{" "}
                and acknowledge that you have read and understand the{" "}
                <a target="_blank" rel="noopener noreferrer" href="https://monobank.com/terms">
                  monobank Protocol Disclaimer
                </a>{" "}
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
        <Card
          style={{ marginTop: "10px", ...styles.card }}
          title={
            <>
              🤑 <Text strong>Trade, earn, and win crypto on the most popular decentralized platforms</Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Timeline.Item dot="🥇">
              <Text style={styles.text}>
                Choose the token to{" "}
                <a target="_blank" rel="noopener noreferrer" href="/dex">
                  Swap
                </a>{" "}
                and enter the trading amount
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="🔁">
              <Text style={styles.text}>
                Double-check the information and click Swap to conduct the transaction
              </Text>
            </Timeline.Item>
            <Timeline.Item dot="✅">
              <Text style={styles.text}>
                Click Confirm on the pop-up window of your connected Wallet to approve the transaction
              </Text>
            </Timeline.Item>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
