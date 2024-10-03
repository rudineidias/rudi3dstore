import ProdutoItem from "@/components/produto/ProdutoItem"
import { produtos } from '@/core'
//import Image from "next/image"

export default function Home() {
  //console.log(produtos); // Verifique se os dados estão corretos
  return (
    <div className="flex-1 flex flex-col container gap-5 py-10" >
      {produtos.map((produto) => (
        <ProdutoItem key={produto.id} produto={produto} /> 
      ))}
    </div>
  )
}
