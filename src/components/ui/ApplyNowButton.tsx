import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Bot } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ApplyNowButton({
  className = "",
}: {
  className?: string;
}) {
  return (
    <Button
      size="sm"
      className={cn(
        "bg-blue-600 hover:bg-blue-700 text-white group shadow-lg shadow-blue-600/25 ",
        className
      )}
      asChild
    >
      <Link target="_blank" href={"https://portal.siotics.org"}>
        <Bot className="mr-2 h-4 w-4" />
        Apply Now!
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  );
}
