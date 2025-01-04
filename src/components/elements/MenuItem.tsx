import Link from "next/link";

const MenuItem = ({ title }: { title: string }) => {
  // const context = useContext(GlobalStateContext);

  return <Link href={"/#" + title}>{title}</Link>;
};

export default MenuItem;
