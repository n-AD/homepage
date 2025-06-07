import styles from "../styles/componentStyles/footerLinks.module.css";
import githubIcon from "../assets/images/github.png";
import linkedinIcon from "../assets/images/linkedin.png";
import emailIcon from "../assets/images/email.png";

const FooterLinks = () => {
  const links = [
    {
      href: "https://github.com/n-AD",
      icon: githubIcon,
      alt: "GitHub",
      label: "View GitHub profile",
      title: "GitHub", // This creates the hover tooltip
    },
    {
      href: "https://www.linkedin.com/in/nick-denbleyker-566a35291",
      icon: linkedinIcon,
      alt: "LinkedIn",
      label: "Connect on LinkedIn",
      title: "LinkedIn",
    },
    {
      href: "mailto:ndenbleyker@gmail.com",
      icon: emailIcon,
      alt: "Email",
      label: "Send email",
      title: "Email me",
    },
  ];

  return (
    <div className={styles.footerSocialLinks}>
      {links.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={
            link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          className={styles.footerSocialLink}
          title={link.title}
        >
          <img src={link.icon} alt={link.alt} />
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
