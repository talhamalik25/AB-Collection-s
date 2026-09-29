"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { products } from "./data";

const Store = createContext(null);
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem("gulnaar-cart") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem("gulnaar-cart", JSON.stringify(cart)); }, [cart, ready]);
  const add = (id, size="M") => setCart((c) => { const i=c.findIndex(x=>x.id===id&&x.size===size); if(i<0)return [...c,{id,size,qty:1}]; return c.map((x,j)=>j===i?{...x,qty:x.qty+1}:x); });
  const remove = (id,size) => setCart(c=>c.filter(x=>x.id!==id||x.size!==size));
  const quantity = (id,size,qty) => setCart(c=>c.map(x=>x.id===id&&x.size===size?{...x,qty:Math.max(1,qty)}:x));
  const count = cart.reduce((n,x)=>n+x.qty,0);
  return <Store.Provider value={{cart,add,remove,quantity,count,searchOpen,setSearchOpen,menuOpen,setMenuOpen,products}}>{children}</Store.Provider>;
}
export const useStore = () => useContext(Store);
