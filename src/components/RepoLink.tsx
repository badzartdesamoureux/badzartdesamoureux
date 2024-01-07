import { cc } from '@/utility/css';
import Link from 'next/link';
import { TbBrandVinted } from "react-icons/tb";

export default function RepoLink() {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap">
      <span className="hidden sm:inline-block">
        Vinted
      </span>
      <Link
        href="https://www.vinted.fr/member/172020939-lebadzartdesamoureux"
        target="_blank"
        className={cc(
          'flex items-center gap-1',
          'text-black dark:text-white',
          'hover:underline',
        )}
      >
        <TbBrandVinted className="translate-y-[1px] hidden xs:inline-block" />
      Le BadZart Des Amoureux
      </Link>
    </span>
  );
}
