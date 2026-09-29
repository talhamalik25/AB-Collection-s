"use client";
import { useEffect } from "react";
import { useStore } from "../store";
export default function SearchPage(){const{setSearchOpen}=useStore();useEffect(()=>setSearchOpen(true),[setSearchOpen]);return <main className="page-shell search-page"><span className="eyebrow">LOOKING FOR SOMETHING?</span><h1>Search the <em>collection.</em></h1><button className="button button-dark" onClick={()=>setSearchOpen(true)}>OPEN SEARCH ↗</button></main>}
