import { ProductPage } from "../../routes";
export default async function Product({params}){const {id}=await params;return <ProductPage id={id}/>}
