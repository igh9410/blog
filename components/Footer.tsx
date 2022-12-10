import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-4 flex space-x-5">
          <Link href="mailto:athanasia9410@gmail.com">
            <EmailIcon className="text-sm hover:text-blue-600 dark:text-gray-300 h-10 w-10"></EmailIcon>
          </Link>
          <Link href="https://github.com/igh9410">
            <GitHubIcon className="text-sm hover:text-blue-600 dark:text-gray-300 h-10 w-10"></GitHubIcon>
          </Link>
          <Link href="https://www.linkedin.com/in/geonhyuk-im-6966421b0/">
            <LinkedInIcon className="text-sm hover:text-blue-600 dark:text-gray-300 h-10 w-10"></LinkedInIcon>
          </Link>
        </div>
      </div>
    </footer>
  );
}
