let hasLogged = false;

export function showConsoleArt() {
  if (hasLogged) return;
  hasLogged = true;
  const art = `
██╗      ██████╗  ██████╗██╗  ██╗     █████╗ ██╗
██║     ██╔═══██╗██╔═══██╗██║ ██╔╝    ██╔══██╗██║
██║     ██║   ██║██║   ██║█████╔╝     ███████║██║
██║     ██║   ██║██║   ██║██╔═██╗     ██╔══██║██║
███████╗╚██████╔╝╚██████╔╝██║  ██╗    ██║  ██║██║
╚══════╝ ╚═════╝  ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═╝
`;

  if (typeof window === 'undefined') return;

  // ASCII art — purple color
  console.log(
    `%c${art}`,
    'color: #FFFFFF; font-family: monospace; line-height: 1.4;'
  );

  // Branding line
  console.log(
    '%c🌍 Loved by 1,000,000+ downloaders worldwide.',
    'color: #ffffff; font-weight: bold; font-size: 15px;'
  );

   console.log(
    '%c🛠️ Got a feature idea? Reach out to the developer → somgoutam0@gmail.com',
    'color: #ffffff; font-weight: bold; font-size: 15px;'
  );
}
