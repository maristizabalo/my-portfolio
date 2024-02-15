'use client'

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { useTransition } from "react"

const LocalSwitcher = () => {
    const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const localActive = useLocale()

    const onSelectChange = (e) => {
        const nextLocale = e.target.value
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        })
    }

    return (
        <div>
            <select
                className="border border-[#7042f861] bg-[#0300145e] px-[10px] py-[5px] rounded-full text-gray-200"
                onChange={onSelectChange}
                defaultValue={localActive}
                disabled={isPending}
            >
                <option value='en'>
                        English
                </option>
                <option value='es'>
                        Español
                </option>
            </select>
        </div>
    )
}

export default LocalSwitcher