import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  icon: string;
  name: string;
  color: string;
}

const CategoryCard = ({ icon, name, color }: CategoryCardProps) => {
  return (
    <Card className={cn(
      "p-6 cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1",
      "flex flex-col items-center justify-center gap-3"
    )}>
      <div className={cn(
        "w-16 h-16 rounded-full flex items-center justify-center text-3xl",
        color
      )}>
        {icon}
      </div>
      <h3 className="font-semibold text-center">{name}</h3>
    </Card>
  );
};

export default CategoryCard;
