import { NavLink, Outlet } from 'react-router-dom';

const Programming = () => {
  const languages = [
    { name: "C", href: "c" },
    { name: "C++", href: "cpp" },
    { name: "Java", href: "java" },
    { name: "Python", href: "python" },
    { name: "Fullstack", href: "fullstack" },
  ]
  return (
    <div>
      <div className='flex flex-col justify-center items-center gap-4 '>
        <h1 className='mt-2'>Choose Programming </h1>
        <div className='flex gap-4'>
      {languages.map((language) => (
        <NavLink to={language.href} key={language.name} className={"border border-black px-6 py-2 rounded-full"}>
          {language.name}
        </NavLink>
      ))}
        </div>
      </div>
      <Outlet/>
    </div>
  );
}

export default Programming;
