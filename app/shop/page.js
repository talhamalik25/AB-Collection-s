import { ShopPage } from "../routes";
export default async function Shop({ searchParams }){const params=await searchParams;return <ShopPage initialCategory={params.category||""} initialFilter={params.filter||""}/>}
