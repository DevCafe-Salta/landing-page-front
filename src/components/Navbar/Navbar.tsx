import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon} from '@heroicons/react/24/outline';
import { useTheme } from '../../hooks/useTheme';

// Definición de tipo para los elementos de navegación
type NavigationItem = {
  name: string;
  href: string;
  current: boolean;
};

// Lista de navegación con tipo definido
const navigation: NavigationItem[] = [
  { name: 'Sobre nosotros', href: '#about', current: false },
  { name: 'Proyectos', href: '#course-section', current: false },
  { name: 'Eventos', href: '#events', current: false },
  { name: '¡Sumate!', href: '#about', current: true },
];

// Función para unir clases condicionales
function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Componente Navbar
const Navbar: React.FC = () => {

  //Funcion switch modo claro / oscuro
  const {theme, toggleDarkTheme} = useTheme();
  return (
    <Disclosure as="nav" className="fixed top-0 left-0 w-full bg-softBlack bg-opacity-30 backdrop-blur-2xl z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-orange-400 hover:bg-orange-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 justify-center items-center sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                alt="DevCafe"
                src='assets/other-assets/svg/common/dev-cafe-logo.svg'
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-orange text-smokeGray p-4 rounded-sm' : ' text-smokeGray hover:bg-orange-700 hover:text-orange',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                onClick={toggleDarkTheme} 
                className="rounded-full p-2 text-softGray hover:bg-orange-700 hover:text-smokeGray focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {!theme ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-orange text-softGray' : 'text-softGray hover:bg-orange-700 hover:text-orange',
                'block rounded-md px-3 py-2 text-base font-medium text-center',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default Navbar;
