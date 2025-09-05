import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GetNotifiedButton({
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
      <Link
        target="_blank"
        href={
          "https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20250718%2F20250719&details=Siotics%20Registration%20is%20open%21%20Checkout%20https%3A%2F%2Fsiotics.org&location=&text=Siotics%20Registration"
        }
      >
        <Calendar className="mr-2 h-4 w-4" />
        Get Notified
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </Button>
  );
}
