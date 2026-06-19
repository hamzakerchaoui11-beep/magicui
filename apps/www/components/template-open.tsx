"use client"

import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

interface TemplateOpenProps {
  url?: string
  free?: boolean
}

export function TemplateOpen({
  url = "https://github.com/magicuidesign/magicui",
  free = true,
}: TemplateOpenProps) {
  return (
    <Link
      href={url}
      target="_blank"
      className={cn(
        buttonVariants({
          variant: "default",
        }),
        "not-prose group relative w-full shrink gap-2"
      )}
    >
      Download
      <GitHubLogoIcon className="size-4" />
    </Link>
  )
}
