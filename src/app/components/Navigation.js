import Link from "next/link";
const Navigation = () => {
  const links = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
  ];
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, route }) => {
            return (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
