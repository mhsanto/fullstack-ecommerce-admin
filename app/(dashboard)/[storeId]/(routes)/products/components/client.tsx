"use client";

import Heading from "@/components/ui/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { ProductColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import ApiList from "@/components/ui/api-list";
type ProductClientProps = {
  data: ProductColumns[];
};
const ProductClients: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();
  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data?.length})`}
          description="Manage your products"
        />
        <Button
          onClick={() =>
            router.push(`/${params.storeId}/products/5f898a0b69ca9a0ea56d0a11`)
          }
          className="flex gap-2 self-end"
        >
          <Plus className=" h-4 w-4" />
          <span className="hidden sm:block">Add new</span>
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Separator />
      <Heading title="Api" description="Api calls for product" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};

export default ProductClients;
