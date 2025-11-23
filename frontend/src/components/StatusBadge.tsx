import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "active" | "pending" | "error" | "success" | "warning";
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const getStatusStyles = () => {
    switch (status) {
      case "active":
      case "success":
        return "bg-success/20 text-success border-success/30";
      case "pending":
        return "bg-warning/20 text-warning border-warning/30";
      case "error":
        return "bg-destructive/20 text-destructive border-destructive/30";
      case "warning":
        return "bg-warning/20 text-warning border-warning/30";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Badge variant="outline" className={cn("font-medium", getStatusStyles())}>
      <div className="w-1.5 h-1.5 rounded-full bg-current mr-1.5" />
      {label || status}
    </Badge>
  );
}
