import PropTypes from "prop-types";
import { Typography, IconButton } from "@material-tailwind/react";

const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  return (
    <footer className="relative px-4 pt-8 pb-6">
      <div className="container mx-auto">
        {/* Centered content */}
        <div className="flex flex-col items-center text-center pt-6">
          <div className="w-full px-4">
            <Typography variant="h4" className="mb-4" color="blue-gray">
              {title}
            </Typography>
            <Typography className="font-normal text-blue-gray-500 max-w-md mx-auto">
              {description}
            </Typography>
            <div className="mt-6 mb-8 flex justify-center gap-2">
              {socials.map(({ color, name, path }) => (
                <a
                  key={name}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconButton color="white" className="rounded-full shadow-none bg-transparent">
                    <Typography color={color}>
                      <i className={`fa-brands fa-${name}`} />
                    </Typography>
                  </IconButton>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menus (empty if no items) */}
        <div className="mx-auto mt-12 grid w-max grid-cols-2 gap-24">
          {menus.map(({ name, items }) => (
            <div key={name}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 block font-medium uppercase"
              >
                {name}
              </Typography>
              <ul className="mt-3">
                {items.map((item) => (
                  <li key={item.name}>
                    <Typography
                      as="a"
                      href={item.path}
                      target="_blank"
                      rel="noreferrer"
                      variant="small"
                      className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                    >
                      {item.name}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="my-6 border-gray-300" />

        {/* Copyright centered */}
        <div className="flex flex-wrap items-center justify-center">
          <div className="w-full px-4 text-center">
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              {copyright}
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  title: "E - Code Solutions",
  description: "🌱 Take care of the Earth, and it will take care of you",
  socials: [
    { color: "blue", name: "twitter", path: "https://www.twitter.com" },
    { color: "red", name: "youtube", path: "https://www.youtube.com/" },
    { color: "purple", name: "instagram", path: "https://www.instagram.com/" },
    { color: "black", name: "github", path: "https://github.com/awadi99" },
  ],
  menus: [],
  copyright: (
    <>
      Copyright © {year} Developed by{" "}
      <a
        href="https://www.creative-tim.com?ref=mtk"
        target="_blank"
        className="text-blue-gray-500 transition-colors hover:text-blue-500"
      >
        AW
      </a>
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
