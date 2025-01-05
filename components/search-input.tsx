"use client";

import { useDebounce } from "@/hooks/useDebounce";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEventHandler, useEffect, useState } from "react";
import qs from "query-string";
import { Search } from "lucide-react";


const SearchInput = () => {
    const router = useRouter()
    const searchParams = useSearchParams()

    const categoryId = searchParams.get("categoryId")
    const name = searchParams.get("name")

    const [value, setValue] = useState(name || "")
    const debounceValue = useDebounce<string>(value, 500)

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    useEffect(() => {
        const query = {
            name: debounceValue,
            categoryId
        }
        const url = qs.stringifyUrl({
            url: window.location.href,
            query,
        }, { skipEmptyString: true, skipNull: true })

        router.push(url);

    }, [debounceValue, router, categoryId])
    return (
        <div className="relative w-[100%] mx-auto">
            <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
            <input
                onChange={onChange}
                value={value}
                placeholder="Search..."
                className="w-96 h-10 pl-10 bg-primary/10 focus:accent-black focus:outline-none"
            />
        </div>
    );
}

export default SearchInput;