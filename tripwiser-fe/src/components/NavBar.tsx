"use client"; // This marks the component as a Client Component

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store"; // Adjust the import path based on your store file structure
import Link from "next/link";
import styles from "@/styles/NavBar.module.css"; // Import CSS module for styling

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Dashboard", href: "dashboard", current: true },
  { name: "Calendar", href: "alendar", current: false },
  { name: "Trips", href: "trips", current: false },
  { name: "Calendar", href: "#", current: false },
];

const Navbar: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.user.isAuthenticated
  );

  console.log(isAuthenticated);

  if (!isAuthenticated) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            MyApp
          </Link>

          <button className={styles.loginButton}>Login</button>
        </div>
      </nav>
    );
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          MyApp
        </Link>
        <ul className={styles.menu}>
          {navigation.map((item) => (
            <li key={item.href} className={item.current ? styles.current : ""}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button className={styles.loginButton}>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
