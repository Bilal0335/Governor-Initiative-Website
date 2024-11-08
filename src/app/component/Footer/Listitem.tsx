import Link from "next/link";
interface ListItemProps {
  href: string;
  children: React.ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ href, children }) => {
  return (
    <div>
      <Link href={href}>
        <li className="py-1">{children}</li>
      </Link>
    </div>
  );
};

export default ListItem;
