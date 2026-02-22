export default defineAppConfig({
  global: {
    picture: {
      dark: "/dat.jpg",
      light: "/dat.jpg",
      alt: "Bùi Nguyên Đạt - Frontend Developer",
    },
    meetingLink: "https://cal.com/",
    email: "datbui13579@gmail.com",
    available: true,
  },
  ui: {
    colors: {
      primary: "blue",
      neutral: "neutral",
    },
    pageHero: {
      slots: {
        container: "py-18 sm:py-24 lg:py-32",
        title: "mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl",
        description:
          "mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted",
      },
    },
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [
      {
        icon: "i-simple-icons-zalo",
        to: "https://zalo.me/0924969622",
        target: "_blank",
        "aria-label": "Đạt Bùi on Zalo",
      },
      {
        icon: "i-simple-icons-linkedin",
        to: "https://www.linkedin.com/in/%C4%91%E1%BA%A1t-b%C3%B9i-556704238/",
        target: "_blank",
        "aria-label": "Đạt Bùi on Linkedin",
      },
      {
        icon: "i-simple-icons-github",
        to: "https://github.com/Datthehooman",
        target: "_blank",
        "aria-label": "Datthehooman on GitHub",
      },
    ],
  },
});
