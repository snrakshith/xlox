import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function SiteLogo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default SiteLogo;
