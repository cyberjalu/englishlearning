import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const SUB_LINKS = ["Claim", "Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20 ">
      <div className="container mx-auto ">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography placeholder={undefined} className="text-center font-normal !text-gray-700">
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="#" target="_blank">
              Online English Learning
            </a>{" "}
            by{" "}
            <a href="#" target="_blank">
              Quynh
            </a>
            .
          </Typography>

          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
