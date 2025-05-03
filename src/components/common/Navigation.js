import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

function Navigation() {
  const router = useRouter();

  const links = [
    { id: 1, linkName: "Dashboard", linkImg: "/home.png", href: "/", active: true },
    { id: 2, linkName: "Order List", linkImg: "/list.png", href: "/orders", active: true },
    { id: 4, linkName: "Customers", linkImg: "/customer.png", href: "/customers", active: true },
    { id: 5, linkName: "Analytics", linkImg: "/analis.png", href: "/analis", active: true },
    { id: 6, linkName: "Review", linkImg: "/review.png", href: "/review", active: true },
    { id: 7, linkName: "Foods", linkImg: "/food.png", href: "/foods", active: true },
    { id: 8, linkName: "Food Detail", linkImg: "/foodDetail.png", href: "/food-detail", active: true },
    { id: 10, linkName: "Calendar", linkImg: "/calendar.png", href: "/calendar", active: true },
    { id: 11, linkName: "Chat", linkImg: "/chat.png", href: "/chat", active: true },
    { id: 12, linkName: "Wallet", linkImg: "/wallet.png", href: "/wallet", active: true },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Head />
      <aside style={{
        width: "345px",
        backgroundColor: "aliceblue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Barlow', sans-serif"
      }}>
        <div style={{ marginTop: "58px", marginBottom: "58px", backgroundColor: "unset" }}>
          <Image src="/Sedap.png" alt="" width={167} height={49} style={{ backgroundColor: "unset" }} />
          <p style={{ color: "#B9BBBD", fontSize: "18px", backgroundColor: "unset" }}>
            Modern Admin Dashboard
          </p>
        </div>

        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "unset",
          position: "relative"
        }}>
          {links.map(({ id, href, linkName, linkImg, active }) => (
            <Links key={id} linkName={linkName} linkImg={linkImg} href={href} active={active} />
          ))}
        </div>

        <div style={{
          width: "260px",
          marginTop: "89px",
          display: "flex",
          padding: "20px",
          backgroundColor: "#00B074",
          borderRadius: "10px"
        }}>
          <div style={{ width: "140px", backgroundColor: "unset" }}>
            <p style={{ width: "140px", fontSize: "12px", color: "white", backgroundColor: "unset" }}>
              Please, organize your menus through button below!
            </p>
            <button style={{
              width: "116px",
              height: "37px",
              color: "#464255",
              fontSize: "15px",
              backgroundColor: "#F2F5F3",
              border: "none",
              borderRadius: "5px",
              marginTop: "8px",
              cursor: "pointer"
            }}>
              +Add Menus
            </button>
          </div>
          <Image src="/illustration.png" width={76} height={90} alt="illustration" style={{ backgroundColor: "unset" }} />
        </div>

        <div style={{ width: "245px", backgroundColor: "unset", marginTop: "59px", marginBottom: "43px" }}>
          <p style={{ backgroundColor: "unset", color: "#515151", fontSize: "12px", marginBottom: "5px" }}>
            Sedap Restaurant Admin Dashboard
          </p>
          <p style={{ backgroundColor: "unset", color: "#969BA0", fontSize: "12px", fontWeight: "400" }}>
            © 2020 All Rights Reserved
          </p>
          <p style={{ backgroundColor: "unset", color: "#969BA0", fontSize: "14px", marginTop: "15px" }}>
            Made with ♥ by Peterdraw
          </p>
        </div>
      </aside>
    </div>
  );
}

function Links(props) {
  const { linkName, linkImg, href, active } = props;
  const router = useRouter();

  const isActive = router.asPath === href;

  return (
    <Link
      href={href}
      style={{
        textDecoration: "none",
        color: isActive ? "#177556" : "black",
        width: "250px",
        height: "54px",
        display: "flex",
        alignItems: "center",
        margin: "0 auto",
        borderRadius: "8px",
        backgroundColor: isActive ? "#00B07426" : "unset",
        fontWeight: "500",
        position: "relative",
        paddingLeft: "30px",
      }}
    >
      {isActive && (
        <span style={{
          content: "''",
          display: "block",
          width: "8px",
          height: "100%",
          backgroundColor: "#00B074",
          marginRight: "15px",
          borderRadius: "4px",
          position: "absolute",
          left: "-20%"
        }} />
      )}
      <Image src={linkImg} alt={linkName} width={20} height={20} style={{ margin: "15px 20px", backgroundColor: "unset" }} />
      {linkName}
    </Link>
  );
}

export default Navigation;
