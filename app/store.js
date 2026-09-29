"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { products } from "./data";

const Store = createContext(null);
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [ready, setReady] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => { try { setCart(JSON.parse(localStorage.getItem("ab-collection-cart") || "[]")); } catch {} setReady(true); }, []);
  useEffect(() => { if (ready) localStorage.setItem("ab-collection-cart", JSON.stringify(cart)); }, [cart, ready]);
  const add = (id, size="M", color=null) => setCart((c) => { const i=c.findIndex(x=>x.id===id&&x.size===size&&x.color===color); if(i<0)return [...c,{id,size,color,qty:1}]; return c.map((x,j)=>j===i?{...x,qty:x.qty+1}:x); });
  const remove = (id,size,color) => setCart(c=>c.filter(x=>x.id!==id||x.size!==size||x.color!==color));
  const quantity = (id,size,color,qty) => setCart(c=>c.map(x=>x.id===id&&x.size===size&&x.color===color?{...x,qty:Math.max(1,qty)}:x));
  const count = cart.reduce((n,x)=>n+x.qty,0);
  const toggleWishlist = (id) => setWishlist(w => w.includes(id) ? w.filter(x=>x!==id) : [...w,id]);
  return <Store.Provider value={{cart,add,remove,quantity,clearCart:()=>setCart([]),count,wishlist,toggleWishlist,searchOpen,setSearchOpen,menuOpen,setMenuOpen,products}}>{children}</Store.Provider>;
}
export const useStore = () => useContext(Store);
