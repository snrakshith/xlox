import { AuthFooter } from "./auth-footer";
import { AuthNavbar } from "./auth-navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white`}>
        <div className="flex flex-col">
          <AuthNavbar />
          <main className="flex-1">{children}</main>
          <AuthFooter />
        </div>
      </body>
    </html>
  );
}
