export const products = [
  { id: "gul", name: "Gul-e-Rang Lawn Suit", category: "Unstitched", price: 8490, old: 10900, tag: "NEW", image: "photo-1610030469983-98e550d6193c", second: "photo-1583391733956-6c78276477e3", color: "Ivory / Rose" },
  { id: "noor", name: "Noor Embroidered Set", category: "Ready to Wear", price: 12490, tag: "BESTSELLER", image: "photo-1594633312681-425c7b97ccd1", second: "photo-1583391733956-6c78276477e3", color: "Soft Blush" },
  { id: "sahar", name: "Sahar Printed Kurta", category: "Ready to Wear", price: 6790, image: "photo-1583391733981-849840f5d4f0", second: "photo-1610030469983-98e550d6193c", color: "Sand / Fig" },
  { id: "meher", name: "Meher Festive Edit", category: "Festive", price: 18900, old: 21900, image: "photo-1617627143750-d86bc21e42bb", second: "photo-1594633312681-425c7b97ccd1", color: "Rosewood" },
  { id: "zari", name: "Zari Everyday Co-ord", category: "Ready to Wear", price: 9990, image: "photo-1583391733956-6c78276477e3", second: "photo-1583391733981-849840f5d4f0", color: "Oatmeal" },
  { id: "anaya", name: "Anaya Chiffon Dupatta", category: "Accessories", price: 4290, image: "photo-1610030469983-98e550d6193c", second: "photo-1617627143750-d86bc21e42bb", color: "Blush" },
];
export const photo = (id, w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const money = (n) => `Rs. ${Number(n).toLocaleString("en-PK")}`;
