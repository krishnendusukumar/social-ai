"use client"
import { cn } from "@/lib/utils";
import { category } from "@prisma/client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import qs from "query-string";

interface categoriesProps {
    data: category[]
}
const Categories = ({ data }: categoriesProps) => {
    const router = useRouter()
    const searchParam = useSearchParams()

    const categoryId = searchParam.get('categoryId')

    const onclick = (id: string | undefined) => {
        const query = { categoryId: id }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query
        }, { skipNull: true })
        router.push(url)
    }
    return (
        <div className="w-full overflow-x auto space-x-2 flex p-1">
            <button
                onClick={() => onclick(undefined)}
                className={cn(`
                flex
                items-centertext-cener
                text-xs
                md:text-sm
                px-2
                md:px-4py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                tansition
                `, !categoryId ? 'bg-primary/50' : 'bg-primary/10')}
            >
                Newest
            </button>
            {data.map(item => (
                <button
                    onClick={() => onclick(item.id)}
                    key={item.id}
                    className={cn(`
                flex
                items-centertext-cener
                text-xs
                md:text-sm
                px-2
                md:px-4py-2
                md:py-3
                rounded-md
                bg-primary/10
                hover:opacity-75
                tansition
                `, item.id == categoryId ? 'bg-primary/50' : 'bg-primary/10')}
                >
                    {item.name}
                </button>
            ))}
        </div>
    );
}

export default Categories;