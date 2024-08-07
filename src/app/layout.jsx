// import { Inter } from "next/font/google";
// import "./globals.css";
// import { Providers } from "./providers";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Training Team Database",
//   description: "Database",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers>
//         {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }      
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Training Team Database",
  description: "Database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
        {children}
        </Providers>
      </body>
    </html>
  );
}